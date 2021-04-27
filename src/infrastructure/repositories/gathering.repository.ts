import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { Gathering } from '@/domain/entity/Gathering';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { toGathering } from './converters/gathering.converter';
import { OrmCategory } from './entities/category.entity';
import { OrmComment } from './entities/comment.entity';
import { OrmGathering } from './entities/gathering.entity';
import { OrmReportGathering } from './entities/report-gathering.entity';
import { OrmUser } from './entities/user.entity';

@Injectable()
export class GatheringRepository implements IGatheringRepository {
  constructor(
    @InjectRepository(OrmGathering) private readonly ormGatheringRepository: Repository<OrmGathering>,
    @InjectRepository(OrmCategory) private readonly ormCategoryRepository: Repository<OrmCategory>,
    @InjectRepository(OrmUser) private readonly ormUserRepository: Repository<OrmUser>,
    @InjectRepository(OrmComment) private readonly ormCommentRepository: Repository<OrmComment>,
  ) {}

  private async toOrmGathering(gathering: Gathering): Promise<OrmGathering> {
    const ormGathering = new OrmGathering();
    const id = gathering.getId();
    if (id != -1) ormGathering.id = id;
    const [user, category, comments] = await Promise.all([
      this.ormUserRepository.findOne(gathering.getUserId()),
      this.ormCategoryRepository.findOne(gathering.getCategoryId()),
      Array.isArray(gathering.getCommentIds())
        ? Promise.all(gathering.getCommentIds().map((id) => this.ormCommentRepository.findOne(id)))
        : [],
    ]);
    ormGathering.user = user;
    ormGathering.category = category;
    ormGathering.comments = comments;
    ormGathering.title = gathering.getTitle();
    ormGathering.body = gathering.getBody();
    ormGathering.closed = gathering.isClosed();
    ormGathering.deadline = gathering.getDeadline();
    ormGathering.numberOfPersonsJoined = gathering.getNumberOfPersonsJoined();
    ormGathering.numberOfPersonsToInvite = gathering.getNumberOfPersonsToInvite();
    ormGathering.openChatUrl = gathering.getOpenChatUrl();
    return ormGathering;
  }

  async getPostedGatheringsByUserId(userId: number): Promise<Gathering[]> {
    const ormGatherings = await this.ormGatheringRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'category', 'comments', 'participants'],
    });
    return Promise.all(ormGatherings.map((orm) => toGathering(orm)));
  }

  async getGatherings(isClosed: boolean): Promise<Gathering[]> {
    const ormGatherings = await this.ormGatheringRepository.find({
      where: { closed: isClosed },
      relations: ['user', 'category', 'comments', 'participants'],
    });
    return await Promise.all(ormGatherings.map((orm) => toGathering(orm)));
  }

  async getMyGatherings(userId: number): Promise<Gathering[]> {
    const [ormUser, ormGatheringList] = await Promise.all([
      this.ormUserRepository.findOne(userId, { relations: ['participantsGatherings'] }),
      this.ormGatheringRepository.find({ where: { user: { id: userId } } }),
    ]);
    return await Promise.all(
      [...ormUser.participantsGatherings, ...ormGatheringList].map((orm) => this.getGatheringById(orm.id)),
    );
  }

  async getMyGatheringById(userId: number, gatheringId: number): Promise<Gathering> {
    const ormUser = await this.ormUserRepository.findOne(userId, { relations: ['participantsGatherings'] });
    const ormGathering = ormUser.participantsGatherings.find((orm) => orm.id === gatheringId);
    if (!ormGathering) return null;
    return await this.getGatheringById(ormGathering.id);
  }

  async getGatheringById(gatheringId: number): Promise<Gathering> {
    const orm = await this.ormGatheringRepository.findOne(gatheringId, {
      relations: ['user', 'category', 'comments', 'participants'],
    });
    return await toGathering(orm);
  }

  async createGathering(gathering: Gathering): Promise<Gathering> {
    const ormGathering = await this.toOrmGathering(gathering);
    await this.ormGatheringRepository.save(ormGathering);
    return await toGathering(ormGathering);
  }

  async updateGathering(gathering: Gathering): Promise<void> {
    const ormGathering = await this.toOrmGathering(gathering);
    await this.ormGatheringRepository.save(ormGathering);
  }

  async deleteGatheringById(gatheringId: number): Promise<any> {
    await this.ormGatheringRepository.delete({ id: gatheringId });
  }

  async closeGatheringById(gatheringId: number): Promise<any> {
    await this.ormGatheringRepository.update({ id: gatheringId }, { closed: true });
  }

  async reportGatheringById(gatheringId: number): Promise<void> {
    const ormReportGathering = new OrmReportGathering();
    ormReportGathering.gathering = await this.ormGatheringRepository.findOne(gatheringId);
    await ormReportGathering.save();
  }

  async participateInGathering(gatheringId: number, userId: number): Promise<void> {
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.startTransaction();
    const ormUser = await this.ormUserRepository.findOne(userId, { relations: ['participantsGatherings'] });
    if (ormUser.participantsGatherings.find((e) => e.id === gatheringId))
      throw Exception.new({ code: Code.CONFLICT, overrideMessage: '이미 참여함' });
    try {
      const ormGathering = await this.ormGatheringRepository.findOne(gatheringId);
      ormGathering.numberOfPersonsJoined++;
      if (ormGathering.numberOfPersonsToInvite === ormGathering.numberOfPersonsJoined) ormGathering.closed = true;
      ormUser.participantsGatherings.push(ormGathering);
      await ormUser.save();
      await ormGathering.save();
      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw Exception.new({ code: Code.INTERNAL, overrideMessage: error.message });
    }
  }

  async quitGathering(gatheringId: number, userId: number): Promise<void> {
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const [ormUser, ormGathering] = await Promise.all([
        this.ormUserRepository.findOne(userId, { relations: ['participantsGatherings'] }),
        this.ormGatheringRepository.findOne(gatheringId),
      ]);
      ormGathering.numberOfPersonsJoined--;
      ormUser.participantsGatherings = ormUser.participantsGatherings.filter((orm) => orm.id !== gatheringId);
      await ormUser.save();
      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw Exception.new({ code: Code.INTERNAL, overrideMessage: error.message });
    }
  }
}

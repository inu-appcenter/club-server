import { ClubToday } from '@/domain/entity/ClubToday';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { toClubToday } from './converters/clubtoday.converter';
import { OrmCategory } from './entities/category.entity';
import { OrmClub } from './entities/club.entity';
import { OrmClubToday } from './entities/clubtoday.entity';

@Injectable()
export class ClubTodayRepository implements IClubTodayRepository {
  constructor(
    @InjectRepository(OrmClubToday) private readonly ormClubTodayRepository: Repository<OrmClubToday>,
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
  ) {}

  private async toOrmClubToday(clubToday: ClubToday): Promise<OrmClubToday> {
    const ormClubToday = new OrmClubToday();
    const id = clubToday.getId();
    const clubId = clubToday.getClubId();
    if (id !== -1) ormClubToday.id = id;
    ormClubToday.headerImageUrl = clubToday.getHeaderImageUrl();
    ormClubToday.title = clubToday.getTitle();
    ormClubToday.body = clubToday.getBody();
    ormClubToday.club = await this.ormClubRepository.findOne(clubId);
    return ormClubToday;
  }

  async getClubTodayList(): Promise<ClubToday[]> {
    const ormClubTodayList = await this.ormClubTodayRepository.find({ relations: ['club'] });
    return await Promise.all(ormClubTodayList.map((orm) => toClubToday(orm)));
  }

  async getLatelyDateByClubId(clubId: number): Promise<Date> {
    const ormCategory = await getConnection()
      .createQueryBuilder(OrmCategory, 'category')
      .leftJoinAndSelect('category.clubId', 'club')
      .where('category.clubId = :clubId', { clubId })
      .orderBy('createdAt', 'DESC')
      .getOne();
    throw new Error('기달');
  }

  async getClubTodayListByClubId(clubId: number): Promise<ClubToday[]> {
    const ormClub = await this.ormClubRepository.findOne(clubId, { relations: ['clubTodays'] });
    return await Promise.all(ormClub.clubTodays.map((orm) => toClubToday(orm)));
  }

  async getClubTodayById(clubTodayId: number): Promise<ClubToday> {
    const ormClubToday = await this.ormClubTodayRepository.findOne(clubTodayId);
    return await toClubToday(ormClubToday);
  }

  async createClubToday(clubToday: ClubToday): Promise<ClubToday> {
    const ormClubToday = await this.toOrmClubToday(clubToday);
    await this.ormClubTodayRepository.save(ormClubToday);
    return toClubToday(ormClubToday);
  }

  async updateClubToday(clubToday: ClubToday): Promise<void> {
    const ormClubToday = await this.toOrmClubToday(clubToday);
    await this.ormClubTodayRepository.save(ormClubToday);
  }

  async deleteClubTodayById(clubTodayId: number): Promise<void> {
    await this.ormClubTodayRepository.delete({ id: clubTodayId });
  }
}

import { ClubToday } from '@/domain/entity/ClubToday';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getConnection, Repository } from 'typeorm';
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
  getClubTodayListByClubId(clubId: number): Promise<ClubToday[]> {
    throw new Error('Method not implemented.');
  }
  getClubTodayById(clubTodayId: number): Promise<ClubToday> {
    throw new Error('Method not implemented.');
  }

  async createClubToday(clubToday: ClubToday): Promise<ClubToday> {
    const ormClubToday = await this.toOrmClubToday(clubToday);
    await this.ormClubTodayRepository.save(ormClubToday);
    return toClubToday(ormClubToday);
  }

  updateClubToday(clubToday: ClubToday): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteClubTodayById(clubTodayId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

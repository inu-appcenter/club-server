import { ClubToday } from '@/domain/entity/ClubToday';
import { User } from '@/domain/entity/User';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmClubTodayImage } from './entities/club-today-image.entity';
import { OrmClubToday } from './entities/club-today.entity';

@Injectable()
export class ClubTodayRepository implements IClubTodayRepository {
  constructor(
    @InjectRepository(OrmClubToday) private readonly ormClubTodayRepository: Repository<OrmClubToday>,
    @InjectRepository(OrmClubTodayImage) private readonly ormClubTodayImageRepository: Repository<OrmClubTodayImage>,
  ) {}

  private toClubToday(ormClubToday: OrmClubToday): ClubToday {
    const { id, body, title, headImage } = ormClubToday;
    const clubToday = new ClubToday({
      id,
      body,
      headImage: { url: headImage?.url },
      title,
    });
    return clubToday;
  }

  private toOrmClubToday(clubToday: ClubToday): OrmClubToday {
    const ormClubToday = new OrmClubToday();
    const ormClubTodayImage = new OrmClubTodayImage();
    const { id, headImage, title, body } = clubToday;
    if (id != -1) ormClubToday.id = id;
    ormClubTodayImage.url = headImage.url;
    ormClubToday.headImage = ormClubTodayImage;
    ormClubToday.title = title;
    ormClubToday.body = body;
    return ormClubToday;
  }

  // todo: offset, limit
  async getClubTodayList(): Promise<ClubToday[]> {
    return (await this.ormClubTodayRepository.find()).map((clubToday) => this.toClubToday(clubToday));
  }

  // todo: 동아리 이름 나오게 하자구~
  async getClubTodayListByClubId(clubId: number): Promise<ClubToday[]> {
    const a = await this.ormClubTodayRepository.find({ relations: ['club'], where: { club: { id: clubId } } });
    console.log('ClubTodayRepository', a);

    return a.map((clubToday) => this.toClubToday(clubToday));
  }
  getClubTodayById(clubTodayId: number): Promise<ClubToday> {
    throw new Error('Method not implemented.');
  }
  createClubToday(clubToday: ClubToday): Promise<ClubToday> {
    throw new Error('Method not implemented.');
  }
  updateClubTodayById(clubTodayId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteClubTodayById(clubTodayId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

import { Club } from '@/domain/entity/Club';
import { ClubEntityPayload } from '@/domain/entity/types/payloads/ClubEntityPayload';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, Transaction, TransactionManager } from 'typeorm';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClub } from './entities/club.entity';
import { Category } from '@/domain/entity/Category';
import { Admin } from '@/domain/entity/Admin';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { ApplicationInfo } from '@/domain/entity/types/aliases';

@Injectable()
export class ClubRepository implements IClubRepository {
  constructor(
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
    @InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>,
    @InjectRepository(OrmApplicationInfo) private readonly ormApplicationInfoRepository: Repository<OrmApplicationInfo>,
    @InjectRepository(OrmClubImage) private readonly ormClubImageRepository: Repository<OrmClubImage>,
  ) {}

  private toClubImage(ormClubImage: OrmClubImage): string {
    return ormClubImage.url;
  }

  private toClub(ormClub: OrmClub): Club {
    const club = new Club({
      applicationInfo: ormClub.applicationInfo,
      category: new Category(ormClub.category),
      clubName: ormClub.clubName,
      images: ormClub.images.map(this.toClubImage),
      location: ormClub.location,
      summary: ormClub.summary,
    });
    return club;
  }

  private async createApplicationInfo(applicationInfo: ApplicationInfo) {
    await this.ormApplicationInfoRepository.save(applicationInfo);
  }

  async createClub(club: Club): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  getClubById(clubId: number): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  getClubs(): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  getClubsByCategoryId(categoryId: number): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  getClubsByKeyword(keyword: string): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  updateClubById(club: Club): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeClubById(clubId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  recommendClubs(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

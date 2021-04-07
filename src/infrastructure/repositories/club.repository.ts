import { Club } from '@/domain/entity/Club';
import { ClubEntityPayload } from '@/domain/entity/types/payloads/ClubEntityPayload';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, EntityManager, Repository, Transaction, TransactionManager } from 'typeorm';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClub } from './entities/club.entity';
import { Category } from '@/domain/entity/Category';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { ApplicationInfo } from '@/domain/entity/types/aliases';
import { OrmCategory } from './entities/category.entity';
import { OrmClubToday } from './entities/clubtoday.entity';

@Injectable()
export class ClubRepository implements IClubRepository {
  constructor(
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
    @InjectRepository(OrmApplicationInfo) private readonly ormApplicationInfoRepository: Repository<OrmApplicationInfo>,
    private readonly conn: Connection,
  ) {}

  private toClubImage(ormClubImage: OrmClubImage): string {
    return ormClubImage.url;
  }

  private toClub(ormClub: OrmClub): Club {
    const images = [];
    console.log(ormClub.images);

    // for (let i = 0; i < ormClub.images.length; i++) images.push(ormClub.images[i].url);

    const club = new Club({
      applicationInfo: ormClub.applicationInfo,
      category: new Category(ormClub.category),
      clubName: ormClub.clubName,
      images,
      location: ormClub.location,
      summary: ormClub.summary,
    });
    return club;
  }

  private toOrmClub(
    club: Club,
    ormAdmin: OrmAdmin,
    ormApplicationInfo: OrmApplicationInfo,
    ormCategory: OrmCategory,
    ormClubTodays?: OrmClubToday[],
    ormClubImages?: OrmClubImage[],
  ): OrmClub {
    const ormClub = new OrmClub();
    if (club.id != -1) ormClub.id = club.id;
    ormClub.location = club.location;
    ormClub.clubName = club.clubName;
    ormClub.summary = club.summary;
    ormClub.keywords = club.keywords;
    ormClub.admin = ormAdmin;
    ormClub.applicationInfo = ormApplicationInfo;
    ormClub.category = ormCategory;
    ormClub.clubTodays = ormClubTodays;
    ormClub.images = ormClubImages;
    return ormClub;
  }

  private toOrmApplicationInfo(applicationInfo: ApplicationInfo): OrmApplicationInfo {
    const ormApplicationInfo = new OrmApplicationInfo();
    ormApplicationInfo.contact = applicationInfo.contact;
    ormApplicationInfo.etc = applicationInfo.etc;
    ormApplicationInfo.kakaoId = applicationInfo.kakaoId;
    ormApplicationInfo.openChatUrl = applicationInfo.openChatUrl;
    ormApplicationInfo.websiteUrl = applicationInfo.websiteUrl;
    return ormApplicationInfo;
  }

  private toOrmClubImage(image: string): OrmClubImage {
    const ormClubImage = new OrmClubImage();
    ormClubImage.url = image;
    // ormClubImage.club = ormClub;
    return ormClubImage;
  }

  private async createApplicationInfo(applicationInfo: ApplicationInfo) {
    await this.ormApplicationInfoRepository.save(applicationInfo);
  }

  async createClub(club: Club, adminId: number): Promise<Club> {
    const clubs = await this.ormClubRepository.find({
      where: [{ clubName: club.clubName }, { location: club.location }],
    });
    if (clubs.length != 0) throw new HttpException('동아리 이름 또는 위치 중복', HttpStatus.CONFLICT);
    const queryRunner = this.conn.createQueryRunner();
    const ormApplicationInfo = this.toOrmApplicationInfo(club.applicationInfo);
    const ormClubImages = club.images.map(this.toOrmClubImage);
    let saveClub = null;
    // 트랜잭션
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const [applicationInfo, admin, category] = await Promise.all([
        queryRunner.manager.save(ormApplicationInfo),
        queryRunner.manager.findOne(OrmAdmin, adminId),
        queryRunner.manager.findOne(OrmCategory, club.category.id),
      ]);
      const ormClub = this.toOrmClub(club, admin, applicationInfo, category);
      saveClub = await queryRunner.manager.save(ormClub);
      ormClubImages.forEach((orm) => {
        orm.club = saveClub;
      });
      await queryRunner.manager.save(ormClubImages);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      console.error(err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    await queryRunner.release();
    return this.toClub(saveClub);
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

import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { ClubImage } from '@/domain/entity/ClubImage';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { OrmCategory } from './entities/category.entity';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClub } from './entities/club.entity';

@Injectable()
export class ClubRepository implements IClubRepository {
  constructor(
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
    @InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>,
    @InjectRepository(OrmCategory) private readonly ormCategoryRepository: Repository<OrmCategory>,
    @InjectRepository(OrmClubImage) private readonly ormClubImageRepository: Repository<OrmClubImage>,
  ) {}

  private toOrmClubImage(clubImage: ClubImage): OrmClubImage {
    const ormClubImage = new OrmClubImage();
    if (clubImage.id != -1) ormClubImage.id = clubImage.id;
    ormClubImage.url = clubImage.url;
    return ormClubImage;
  }

  private async toClubImage(ormClubImage: OrmClubImage): Promise<ClubImage> {
    if (!ormClubImage) return null;
    return await ClubImage.new({ id: ormClubImage.id, url: ormClubImage.url });
  }

  private async toApplicationInfo(ormApplicationInfo: OrmApplicationInfo): Promise<ApplicationInfo> {
    if (!ormApplicationInfo) return null;
    const { contact, etc, id, kakaoId, openChatUrl, websiteUrl } = ormApplicationInfo;
    const applicationInfo = await ApplicationInfo.new({ id, contact, etc, kakaoId, openChatUrl, websiteUrl });
    return applicationInfo;
  }

  private toOrmApplicationInfo(applicationInfo: ApplicationInfo): OrmApplicationInfo {
    const ormAppInfo = new OrmApplicationInfo();
    if (applicationInfo.id != -1) ormAppInfo.id = applicationInfo.id;
    ormAppInfo.contact = applicationInfo.contact;
    ormAppInfo.etc = applicationInfo.etc;
    ormAppInfo.kakaoId = applicationInfo.kakaoId;
    ormAppInfo.openChatUrl = applicationInfo.openChatUrl;
    ormAppInfo.websiteUrl = applicationInfo.websiteUrl;
    return ormAppInfo;
  }

  private async toClub(ormClub: OrmClub): Promise<Club> {
    if (!ormClub) return null;
    const applicationInfo = await this.toApplicationInfo(ormClub.applicationInfo);
    return await Club.new({
      id: ormClub.id,
      adminId: ormClub.admin.id,
      applicationInfo,
      categoryId: ormClub.category.id,
      clubName: ormClub.clubName,
      clubImages: await Promise.all(ormClub.clubImages.map((image) => this.toClubImage(image))),
      location: ormClub.location,
      summary: ormClub.summary,
      keywordIds: ormClub.keywords.map((keyword) => keyword.id),
    });
  }

  private async toOrmClub(club: Club): Promise<OrmClub> {
    const ormClub = new OrmClub();
    if (club.id != -1) ormClub.id = club.id;
    ormClub.admin = await this.ormAdminRepository.findOne(club.adminId);
    ormClub.applicationInfo = this.toOrmApplicationInfo(club.applicationInfo);
    ormClub.category = await this.ormCategoryRepository.findOne(club.categoryId);
    ormClub.clubImages = club.clubImages.map((image) => this.toOrmClubImage(image));
    ormClub.clubName = club.clubName;
    ormClub.location = club.location;
    ormClub.summary = club.summary;
    return ormClub;
  }

  async getClubByClubName(name: string): Promise<Club> {
    const ormClub = await this.ormClubRepository.findOne(
      { clubName: name },
      { relations: ['keywords', 'admin', 'category', 'clubImages', 'applicationInfo'] },
    );
    return await this.toClub(ormClub);
  }
  async createClub(club: Club): Promise<Club> {
    const ormClub = await this.toOrmClub(club);
    // todo: 트랜젝션

    await getManager().transaction(async (transactionManager) => {
      // await this.
    });
    const realClub = await this.ormClubRepository.save(ormClub);
    return await this.toClub(await this.ormClubRepository.save(ormClub));
  }
  getClubById(clubId: number): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  getClubByIdAndAdminId(clubId: number, adminId: number): Promise<Club> {
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
  getClubsByName(name: string): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  updateClub(club: Club): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeClubById(clubId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  recommendClubs(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

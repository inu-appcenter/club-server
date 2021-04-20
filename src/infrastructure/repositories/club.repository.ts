import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { ClubImage } from '@/domain/entity/ClubImage';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { OrmCategory } from './entities/category.entity';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClub } from './entities/club.entity';
import { OrmKeyword } from './entities/keyword.entity';

@Injectable()
export class ClubRepository implements IClubRepository {
  constructor(
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
    @InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>,
    @InjectRepository(OrmCategory) private readonly ormCategoryRepository: Repository<OrmCategory>,
    @InjectRepository(OrmKeyword) private readonly ormKeywordRepository: Repository<OrmKeyword>,
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
    const [admin, category, keywords] = await Promise.all([
      this.ormAdminRepository.findOne(club.adminId),
      await this.ormCategoryRepository.findOne(club.categoryId),
      await this.ormKeywordRepository.findByIds(club.keywordIds),
    ]);
    ormClub.admin = admin;
    ormClub.category = category;
    ormClub.keywords = keywords;
    ormClub.applicationInfo = this.toOrmApplicationInfo(club.applicationInfo);
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
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.startTransaction();
    try {
      // ? 아니 이게 관련된 지원 정보와 이미지까지 싹다 생성해줬잖아????
      // ? ormClub으로 save하고 리턴을 받지 않아도 참조를 계속 하고 있다구!
      await this.ormClubRepository.save(ormClub);
      await this.ormAdminRepository.update({ id: ormClub.admin.id }, { club: ormClub });
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return await this.toClub(ormClub);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw Exception.new({ code: Code.INTERNAL, overrideMessage: error.message });
    }
  }

  async getClubById(clubId: number): Promise<Club> {
    const ormClub = await this.ormClubRepository.findOne(clubId, {
      relations: ['applicationInfo', 'keywords', 'admin', 'category', 'clubImages'],
    });
    return await this.toClub(ormClub);
  }

  getClubByIdAndAdminId(clubId: number, adminId: number): Promise<Club> {
    throw new Error('Method not implemented.');
  }

  async getClubs(): Promise<Club[]> {
    const ormClubs = await this.ormClubRepository.find({
      relations: ['keywords', 'admin', 'category', 'clubImages', 'applicationInfo'],
    });
    return await Promise.all(ormClubs.map((orm) => this.toClub(orm)));
  }

  async getClubsByCategoryId(categoryId: number): Promise<Club[]> {
    const ormClubs = await this.ormClubRepository.find({
      where: { category: { id: categoryId } },
      relations: ['keywords', 'admin', 'category', 'clubImages', 'applicationInfo'],
    });
    return await Promise.all(ormClubs.map((orm) => this.toClub(orm)));
  }

  async getClubsByKeyword(keyword: string): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  getClubsByName(name: string): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }

  async updateClub(club: Club): Promise<void> {
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const ormClub = await this.toOrmClub(club);
      const ormImages = await this.ormClubImageRepository.find({ where: { club: { id: club.id } } });
      await this.ormClubImageRepository.remove(ormImages);
      await this.ormClubRepository.save(ormClub);
      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw Exception.new({ code: Code.INTERNAL, overrideMessage: error.message });
    }
  }

  removeClubById(clubId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  recommendClubs(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

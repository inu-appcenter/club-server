import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { ClubImage } from '@/domain/entity/ClubImage';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { toClub } from './converters/club.converter';
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

  private async toOrmClub(club: Club): Promise<OrmClub> {
    const ormClub = new OrmClub();
    const id = club.getId();
    if (id != -1) ormClub.id = id;
    const [admin, category, keywords] = await Promise.all([
      this.ormAdminRepository.findOne(club.getAdminId()),
      await this.ormCategoryRepository.findOne(club.getCategoryId()),
      await Promise.all(club.getKeywords().map((keyword) => this.ormKeywordRepository.findOne({ where: { keyword } }))),
    ]);
    ormClub.admin = admin;
    ormClub.category = category;
    ormClub.keywords = keywords;
    ormClub.applicationInfo = this.toOrmApplicationInfo(club.getApplicationInfo());
    ormClub.clubImages = club.getClubImages().map((image) => this.toOrmClubImage(image));
    ormClub.clubName = club.getClubName();
    ormClub.location = club.getLocation();
    ormClub.summary = club.getSummary();
    return ormClub;
  }

  private toOrmClubImage(clubImage: ClubImage): OrmClubImage {
    const ormClubImage = new OrmClubImage();
    const id = clubImage.getId();
    if (id != -1) ormClubImage.id = id;
    ormClubImage.url = clubImage.getUrl();
    return ormClubImage;
  }

  private toOrmApplicationInfo(applicationInfo: ApplicationInfo): OrmApplicationInfo {
    const ormAppInfo = new OrmApplicationInfo();
    const id = applicationInfo.getId();
    if (id != -1) ormAppInfo.id = id;
    ormAppInfo.contact = applicationInfo.getContact();
    ormAppInfo.etc = applicationInfo.getEtc();
    ormAppInfo.kakaoId = applicationInfo.getKakaoId();
    ormAppInfo.openChatUrl = applicationInfo.getOpenChatUrl();
    ormAppInfo.websiteUrl = applicationInfo.getWebsiteUrl();
    return ormAppInfo;
  }

  async getClubByClubName(name: string): Promise<Club> {
    const ormClub = await this.ormClubRepository.findOne(
      { clubName: name },
      { relations: ['keywords', 'admin', 'category', 'clubImages', 'applicationInfo'] },
    );
    return await toClub(ormClub);
  }

  async createClub(club: Club): Promise<Club> {
    const ormClub = await this.toOrmClub(club);
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.startTransaction();
    try {
      await this.ormClubRepository.save(ormClub);
      await this.ormAdminRepository.update({ id: ormClub.admin.id }, { club: ormClub });
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return await toClub(ormClub);
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
    return await toClub(ormClub);
  }

  getClubByIdAndAdminId(clubId: number, adminId: number): Promise<Club> {
    throw new Error('Method not implemented.');
  }

  async getClubs(): Promise<Club[]> {
    const ormClubs = await this.ormClubRepository.find({
      relations: ['keywords', 'admin', 'category', 'clubImages', 'applicationInfo'],
    });
    return await Promise.all(ormClubs.map((orm) => toClub(orm)));
  }

  async getClubsByCategoryId(categoryId: number): Promise<Club[]> {
    const ormClubs = await this.ormClubRepository.find({
      where: { category: { id: categoryId } },
      relations: ['keywords', 'admin', 'category', 'clubImages', 'applicationInfo'],
    });
    return await Promise.all(ormClubs.map((orm) => toClub(orm)));
  }

  async getClubsByKeyword(keyword: string): Promise<Club[]> {
    const ormKeyword = await this.ormKeywordRepository.findOne({ relations: ['clubs'], where: { keyword } });
    if (!ormKeyword) return [];
    const clubs = await Promise.all(ormKeyword.clubs.map((orm) => this.getClubById(orm.id)));
    return clubs;
  }

  async updateClub(club: Club): Promise<void> {
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const ormClub = await this.toOrmClub(club);
      const ormImages = await this.ormClubImageRepository.find({ where: { club: { id: club.getId() } } });
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

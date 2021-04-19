import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { OrmClub } from './entities/club.entity';

@Injectable()
export class ClubRepository implements IClubRepository {
  constructor(@InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>) {}

  private async toApplicationInfo(ormApplicationInfo: OrmApplicationInfo): Promise<ApplicationInfo> {
    if (!ormApplicationInfo) return null;
    const { contact, etc, id, kakaoId, openChatUrl, websiteUrl } = ormApplicationInfo;
    const applicationInfo = await ApplicationInfo.new({ id, contact, etc, kakaoId, openChatUrl, websiteUrl });
    return applicationInfo;
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
      imageUrls: ormClub.clubImages.map((image) => image.url),
      location: ormClub.location,
      summary: ormClub.summary,
      keywordIds: ormClub.keywords.map((keyword) => keyword.id),
    });
  }

  async getClubByClubName(name: string): Promise<Club> {
    const ormClub = await this.ormClubRepository.findOne({ clubName: name }, { relations: ['keywords'] });
    return await this.toClub(ormClub);
  }
  createClub(club: Club): Promise<Club> {
    throw new Error('Method not implemented.');
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

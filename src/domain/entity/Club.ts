import { Entity } from '@/common/entity/Entity';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInstance,
  IsInt,
  IsOptional,
  IsString,
  NotEquals,
} from 'class-validator';
import { ApplicationInfo } from './ApplicationInfo';
import { ClubImage } from './ClubImage';
import { ClubEntityPayload, EditClubEntityPayload } from './types/payloads/ClubEntityPayload';

/**
 * @description 동아리
 * 쉼표로 키워드를 split
 */
export class Club extends Entity {
  @IsString()
  private clubName: string;
  @IsInt()
  private categoryId: number;
  @IsString()
  private location: string;
  @IsString()
  private summary: string;
  @IsInt()
  private adminId: number;
  @IsArray()
  @ArrayMinSize(1, { message: '1장 이상 필요' })
  @ArrayMaxSize(10, { message: '10장 초과 불가' })
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => ClubImage)
  private clubImages: ClubImage[];
  @IsInstance(ApplicationInfo)
  @NotEquals(null)
  @NotEquals(undefined)
  private applicationInfo: ApplicationInfo;
  @IsArray()
  @IsOptional()
  private keywords: string[];

  constructor(payload: ClubEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.clubName = payload.clubName;
    this.location = payload.location;
    this.categoryId = payload.categoryId;
    this.summary = payload.summary;
    this.adminId = payload.adminId;
    this.clubImages = payload.clubImages;
    this.applicationInfo = payload.applicationInfo;
    this.keywords = payload.keywords;
  }

  public getClubName(): string {
    return this.clubName;
  }

  public getCategoryId(): number {
    return this.categoryId;
  }

  public getLocation(): string {
    return this.location;
  }

  public getSummary(): string {
    return this.summary;
  }

  public getAdminId(): number {
    return this.adminId;
  }

  public getClubImages(): ClubImage[] {
    return this.clubImages;
  }

  public getApplicationInfo(): ApplicationInfo {
    return this.applicationInfo;
  }

  public getKeywords(): string[] {
    return this.keywords;
  }

  public async edit(payload: EditClubEntityPayload): Promise<void> {
    const { applicationInfo, categoryId, clubImages, keywords, location, clubName, summary } = payload;
    if (applicationInfo) this.applicationInfo = applicationInfo;
    if (categoryId) this.categoryId = categoryId;
    if (clubImages) this.clubImages = clubImages;
    if (keywords) this.keywords = keywords;
    if (location) this.location = location;
    if (clubName) this.clubName = clubName;
    if (summary) this.summary = summary;
    await this.validate();
  }

  public static async new(payload: ClubEntityPayload): Promise<Club> {
    const club = new Club(payload);
    await club.validate();
    return club;
  }
}

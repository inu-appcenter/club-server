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
  private _clubName: string;
  @IsInt()
  private _categoryId: number;
  @IsString()
  private _location: string;
  @IsString()
  private _summary: string;
  @IsInt()
  private _adminId: number;
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => ClubImage)
  private _clubImages: ClubImage[];
  @IsInstance(ApplicationInfo)
  @NotEquals(null)
  @NotEquals(undefined)
  private _applicationInfo: ApplicationInfo;
  @IsArray()
  @IsOptional()
  private _keywordIds: number[];

  constructor(payload: ClubEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._clubName = payload.clubName;
    this._location = payload.location;
    this._categoryId = payload.categoryId;
    this._summary = payload.summary;
    this._adminId = payload.adminId;
    this._clubImages = payload.clubImages;
    this._applicationInfo = payload.applicationInfo;
    this._keywordIds = payload.keywordIds;
  }

  public get clubName() {
    return this._clubName;
  }

  public get location() {
    return this._location;
  }

  public get applicationInfo() {
    return this._applicationInfo;
  }

  public get clubImages() {
    return this._clubImages;
  }

  public get adminId() {
    return this._adminId;
  }

  public get categoryId() {
    return this._categoryId;
  }

  public get summary() {
    return this._summary;
  }

  public get keywordIds() {
    return this._keywordIds;
  }

  public async edit(payload: EditClubEntityPayload): Promise<void> {
    const { applicationInfo, categoryId, clubImages, keywordIds, location, clubName, summary } = payload;
    if (applicationInfo) this._applicationInfo = applicationInfo;
    if (categoryId) this._categoryId = categoryId;
    if (clubImages) this._clubImages = clubImages;
    if (keywordIds) this._keywordIds = keywordIds;
    if (location) this._location = location;
    if (clubName) this._clubName = clubName;
    if (summary) this._summary = summary;
    await this.validate();
  }

  public static async new(payload: ClubEntityPayload): Promise<Club> {
    const club = new Club(payload);
    await club.validate();
    return club;
  }
}

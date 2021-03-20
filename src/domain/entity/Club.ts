import { Entity } from '@/common/entity/Entity';
import { IsArray, IsString } from 'class-validator';
import { Category } from './Category';
import { ApplicationInfo } from './types/aliases';
import { ClubEntityPayload, EditClubEntityPayload } from './types/payloads/ClubEntityPayload';

/**
 * @description 동아리
 * 쉼표로 키워드 구분
 */
export class Club extends Entity {
  @IsString()
  private _clubName: string;

  private _category: Category;

  @IsString()
  private _location: string;

  @IsString()
  private _summary: string;

  @IsArray()
  private _images: string[];

  private _applicationInfo: ApplicationInfo;

  @IsString()
  private _keywords: string;

  constructor(payload: ClubEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._clubName = payload.clubName;
    this._location = payload.location;
    this._category = payload.category;
    this._summary = payload.summary;
    this._images = payload.images;
    this._applicationInfo = payload.applicationInfo;
    this._keywords = payload.keywords || '';
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

  public get images() {
    return this._images;
  }

  public get category() {
    return this._category;
  }

  public get summary() {
    return this._summary;
  }

  public get keywords() {
    return this._keywords;
  }

  public async edit(payload: EditClubEntityPayload): Promise<void> {
    const { applicationInfo, category, images, keywords, location, clubName, summary } = payload;
    if (applicationInfo) this._applicationInfo = applicationInfo;
    if (category) this._category = category;
    if (images) this._images = images;
    if (keywords) this._keywords = keywords;
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

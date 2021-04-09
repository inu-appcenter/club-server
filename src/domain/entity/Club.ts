import { Entity } from '@/common/entity/Entity';
import { IsArray, IsInstance, IsOptional, IsString } from 'class-validator';
import { Admin } from './Admin';
import { ApplicationInfo } from './ApplicationInfo';
import { Category } from './Category';
import { Image } from './Image';
import { ClubEntityPayload, EditClubEntityPayload } from './types/payloads/ClubEntityPayload';

/**
 * @description 동아리
 * 쉼표로 키워드를 split
 */
export class Club extends Entity {
  @IsString()
  private _clubName: string;
  @IsInstance(Category)
  private _category: Category;
  @IsString()
  private _location: string;
  @IsString()
  private _summary: string;
  @IsInstance(Admin)
  private _admin: Admin;
  @IsArray()
  private _images: Image[];
  @IsInstance(ApplicationInfo)
  private _applicationInfo: ApplicationInfo;
  @IsArray()
  @IsOptional()
  private _keywords: string[];

  constructor(payload: ClubEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._clubName = payload.clubName;
    this._location = payload.location;
    this._category = payload.category;
    this._summary = payload.summary;
    this._admin = payload.admin;
    this._images = payload.images;
    this._applicationInfo = payload.applicationInfo;
    this._keywords = payload.keywords || new Array<string>();
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

  public get admin() {
    return this._admin;
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

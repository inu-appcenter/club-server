import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { Category } from './Category';
import { ApplicationInfo, Image } from './types/aliases';
import { ClubEntityPayload } from './types/payloads/ClubEntityPayload';

/**
 * @description 동아리
 * 쉼표로 키워드 구분
 */
export class Club extends Entity {
  @IsString()
  private _name: string;

  private _category: Category;

  @IsString()
  private _location: string;

  @IsString()
  private _representative: string;

  @IsString()
  private _summary: string;

  private _images: Image[];

  private _applicationInfo: ApplicationInfo;

  @IsString()
  private _keywords: string;

  constructor(payload: ClubEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._name = payload.name;
    this._location = payload.location;
    this._category = payload.category;
    this._summary = payload.summary;
    this._images = payload.images;
    this._representative = payload.representative;
    this._applicationInfo = payload.applicationInfo;
    this._keywords = payload.keywords || '';
  }

  public get name() {
    return this._name;
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

  public get representative() {
    return this._representative;
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
}

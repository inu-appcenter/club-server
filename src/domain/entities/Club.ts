import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { Category } from './Category';
import { applicationInfo, Image } from './types/aliases';
import { ClubEntityPayload } from './types/payloads/ClubEntityPayload';

/**
 * @description 동아리
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

  private _images: Array<Image>;

  private _applicationInfo: applicationInfo;

  constructor(payload: ClubEntityPayload) {
    super();

    this._name = payload.name;
    this._location = payload.location;
    this._category = payload.category;
    this._summary = payload.summary;
    this._images = payload.images;
    this._representative = payload.representative;
    this._applicationInfo = payload.applicationInfo;
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
}

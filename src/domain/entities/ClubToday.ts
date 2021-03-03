import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { Image } from './types/aliases';
import { ClubTodayEntityPayload } from './types/payloads/ClubTodayEntityPayload';

/**
 * @description 클럽 투데이
 */
export class ClubToday extends Entity {
  private _headImage: Image;

  @IsString()
  private _title: string;

  @IsString()
  private _body: string;

  constructor(payload: ClubTodayEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._headImage = payload.headImage;
    this._title = payload.title;
    this._body = payload.body;
  }

  public get headImage() {
    return this._headImage;
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }
}

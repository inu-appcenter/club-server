import { Entity } from '@/common/entity/Entity';
import { IsArray, IsInstance, IsString } from 'class-validator';
import { Image } from './Image';
import { ClubTodayEntityPayload, EditClubTodayEntityPayload } from './types/payloads/ClubTodayEntityPayload';

/**
 * @description 클럽 투데이
 * todo: headerImage는 최상단 이미지로?
 */
export class ClubToday extends Entity {
  @IsInstance(Image)
  private _headerImage: Image;

  @IsString()
  private _title: string;

  @IsString()
  private _body: string;

  constructor(payload: ClubTodayEntityPayload) {
    super();
    this._id = payload.id || -1;
    this._headerImage = payload.headerImage;
    this._title = payload.title;
    this._body = payload.body;
  }

  public get headerImage() {
    return this._headerImage;
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }

  public async edit(payload: EditClubTodayEntityPayload): Promise<void> {
    const { body, headerImage, title } = payload;
    if (body) this._body = body;
    if (headerImage) this._headerImage = headerImage;
    if (title) this._title = title;
    await this.validate();
  }

  public static async new(payload: ClubTodayEntityPayload): Promise<ClubToday> {
    const clubToday = new ClubToday(payload);
    await clubToday.validate();
    return clubToday;
  }
}

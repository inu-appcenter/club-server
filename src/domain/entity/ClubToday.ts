import { Entity } from '@/common/entity/Entity';
import { IsInstance, IsString, NotEquals } from 'class-validator';
import { Club } from './Club';
import { ClubTodayEntityPayload, EditClubTodayEntityPayload } from './types/payloads/ClubTodayEntityPayload';

/**
 * @description 클럽 투데이
 */
export class ClubToday extends Entity {
  @IsString()
  private _headerImageUrl?: string;
  @IsString()
  private _title: string;
  @IsString()
  private _body: string;
  @IsInstance(Club)
  @NotEquals(null)
  @NotEquals(undefined)
  private _club: Club;

  constructor(payload: ClubTodayEntityPayload) {
    super();
    this._id = payload.id || -1;
    this._headerImageUrl = payload.headerImageUrl;
    this._title = payload.title;
    this._body = payload.body;
    this._club = payload.club;
  }

  public get headerImageUrl() {
    return this._headerImageUrl;
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }

  public get club() {
    return this._club;
  }

  public async edit(payload: EditClubTodayEntityPayload): Promise<void> {
    const { body, headerImageUrl, title } = payload;
    if (body) this._body = body;
    if (headerImageUrl) this._headerImageUrl = headerImageUrl;
    if (title) this._title = title;
    await this.validate();
  }

  public static async new(payload: ClubTodayEntityPayload): Promise<ClubToday> {
    const clubToday = new ClubToday(payload);
    await clubToday.validate();
    return clubToday;
  }
}

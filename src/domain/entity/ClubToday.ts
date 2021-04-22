import { Entity } from '@/common/entity/Entity';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { ClubTodayEntityPayload, EditClubTodayEntityPayload } from './types/payloads/ClubTodayEntityPayload';

/**
 * @description 클럽 투데이
 */
export class ClubToday extends Entity {
  @IsString()
  @IsOptional()
  private headerImageUrl: string;
  @IsString()
  private title: string;
  @IsString()
  private body: string;
  @IsInt()
  private clubId: number;

  constructor(payload: ClubTodayEntityPayload) {
    super();
    this.id = payload.id || -1;
    this.headerImageUrl = payload.headerImageUrl;
    this.title = payload.title;
    this.body = payload.body;
    this.clubId = payload.clubId;
  }

  public getHeaderImageUrl(): string {
    return this.headerImageUrl;
  }

  public getTitle(): string {
    return this.title;
  }

  public getBody(): string {
    return this.body;
  }

  public getClubId(): number {
    return this.clubId;
  }

  public async edit(payload: EditClubTodayEntityPayload): Promise<void> {
    const { body, headerImageUrl, title } = payload;
    if (body) this.body = body;
    if (headerImageUrl) this.headerImageUrl = headerImageUrl;
    if (title) this.title = title;
    await this.validate();
  }

  public static async new(payload: ClubTodayEntityPayload): Promise<ClubToday> {
    const clubToday = new ClubToday(payload);
    await clubToday.validate();
    return clubToday;
  }
}

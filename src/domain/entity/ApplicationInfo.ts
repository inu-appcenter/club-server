import { Entity } from '@/common/entity/Entity';
import { IsOptional, IsString } from 'class-validator';
import { ApplicationInfoPayload, EditApplicationInfoPayload } from './types/payloads/ApplicationInfoPayLoad';

export class ApplicationInfo extends Entity {
  @IsString()
  @IsOptional()
  private _kakaoId?: string;
  @IsString()
  @IsOptional()
  private _openChatUrl?: string;
  @IsString()
  @IsOptional()
  private _websiteUrl?: string;
  @IsString()
  @IsOptional()
  private _contact?: string;
  @IsString()
  @IsOptional()
  private _etc?: string;

  constructor(payload: ApplicationInfoPayload) {
    super();
    this._id = payload.id || -1;

    this._contact = payload.contact;
    this._etc = payload.etc;
    this._kakaoId = payload.kakaoId;
    this._openChatUrl = payload.openChatUrl;
    this._websiteUrl = payload.websiteUrl;
  }

  public get kakaoId() {
    return this._kakaoId;
  }

  public get etc() {
    return this._etc;
  }

  public get openChatUrl() {
    return this._openChatUrl;
  }

  public get websiteUrl() {
    return this._websiteUrl;
  }

  public get contact() {
    return this._contact;
  }

  public async edit(payload: EditApplicationInfoPayload): Promise<void> {
    const { contact, etc, kakaoId, openChatUrl, websiteUrl } = payload;
    if (contact) this._contact = contact;
    if (etc) this._etc = etc;
    if (kakaoId) this._kakaoId = kakaoId;
    if (openChatUrl) this._openChatUrl = openChatUrl;
    if (websiteUrl) this._websiteUrl = websiteUrl;
    await this.validate();
  }

  public static async new(payload: ApplicationInfoPayload): Promise<ApplicationInfo> {
    const applicationInfo = new ApplicationInfo(payload);
    await applicationInfo.validate();
    return applicationInfo;
  }
}

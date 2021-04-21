import { Entity } from '@/common/entity/Entity';
import { IsOptional, IsString } from 'class-validator';
import { ApplicationInfoPayload, EditApplicationInfoPayload } from './types/payloads/ApplicationInfoPayLoad';

export class ApplicationInfo extends Entity {
  @IsString()
  @IsOptional()
  private kakaoId: string;
  @IsString()
  @IsOptional()
  private openChatUrl: string;
  @IsString()
  @IsOptional()
  private websiteUrl: string;
  @IsString()
  @IsOptional()
  private contact: string;
  @IsString()
  @IsOptional()
  private etc: string;

  constructor(payload: ApplicationInfoPayload) {
    super();
    this.id = payload.id || -1;

    this.contact = payload.contact;
    this.etc = payload.etc;
    this.kakaoId = payload.kakaoId;
    this.openChatUrl = payload.openChatUrl;
    this.websiteUrl = payload.websiteUrl;
  }

  public getKakaoId(): string {
    return this.kakaoId;
  }

  public getOpenChatUrl(): string {
    return this.openChatUrl;
  }

  public getWebsiteUrl(): string {
    return this.websiteUrl;
  }

  public getContact(): string {
    return this.contact;
  }

  public getEtc(): string {
    return this.etc;
  }

  public async edit(payload: EditApplicationInfoPayload): Promise<void> {
    const { contact, etc, kakaoId, openChatUrl, websiteUrl } = payload;
    if (contact) this.contact = contact;
    if (etc) this.etc = etc;
    if (kakaoId) this.kakaoId = kakaoId;
    if (openChatUrl) this.openChatUrl = openChatUrl;
    if (websiteUrl) this.websiteUrl = websiteUrl;
    await this.validate();
  }

  public static async new(payload: ApplicationInfoPayload): Promise<ApplicationInfo> {
    const applicationInfo = new ApplicationInfo(payload);
    await applicationInfo.validate();
    return applicationInfo;
  }
}

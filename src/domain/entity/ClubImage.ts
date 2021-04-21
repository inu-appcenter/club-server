import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { ClubImagePayload } from './types/payloads/ClubImagePayload';

export class ClubImage extends Entity {
  @IsString()
  private url: string;

  constructor(payload: ClubImagePayload) {
    super();
    this.id = payload.id || -1;

    this.url = payload.url;
  }

  public getUrl(): string {
    return this.url;
  }

  public static async new(payload: ClubImagePayload): Promise<ClubImage> {
    const clubImage = new ClubImage(payload);
    await clubImage.validate();
    return clubImage;
  }
}

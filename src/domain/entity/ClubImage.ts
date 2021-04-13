import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { ClubImagePayload } from './types/payloads/ClubImagePayload';

export class ClubImage extends Entity {
  @IsString()
  private _url: string;

  constructor(payload: ClubImagePayload) {
    super();
    this._id = payload.id || -1;

    this._url = payload.url;
  }

  public get url() {
    return this._url;
  }

  public static async new(payload: ClubImagePayload): Promise<ClubImage> {
    const clubImage = new ClubImage(payload);
    await clubImage.validate();
    return clubImage;
  }
}

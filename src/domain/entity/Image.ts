import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { ImagePayload } from './types/payloads/ClubImagePayload';

export class Image extends Entity {
  @IsString()
  private _url: string;

  constructor(payload: ImagePayload) {
    super();
    this._id = payload.id || -1;

    this._url = payload.url;
  }

  public get url() {
    return this._url;
  }

  public static async new(payload: ImagePayload): Promise<Image> {
    const clubImage = new Image(payload);
    await clubImage.validate();
    return clubImage;
  }
}

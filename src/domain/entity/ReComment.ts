import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { CommentEntityPayload } from './types/payloads/CommentEntityPayload';

/**
 * @description 소모임 대댓글
 */
export class ReComment extends Entity {
  @IsString()
  private _host: string;

  @IsString()
  private _content: string;

  constructor(payload: CommentEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._host = payload.host;
    this._content = payload.content;
  }

  public get host() {
    return this._host;
  }

  public get content() {
    return this._content;
  }
}

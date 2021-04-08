import { Entity } from '@/common/entity/Entity';
import { IsNumber, IsString } from 'class-validator';
import { CommentEntityPayload, EditCommentEntityPayload } from './types/payloads/CommentEntityPayload';

/**
 * @description 소모임 댓글
 */
export class Comment extends Entity {
  @IsString()
  private _content: string;

  @IsNumber()
  private _level: number;

  constructor(payload: CommentEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._content = payload.content;
    this._level = payload.level;
  }

  public get content() {
    return this._content;
  }

  public get level() {
    return this._level;
  }

  public async edit(payload: EditCommentEntityPayload): Promise<void> {
    const { content } = payload;
    if (content) this._content = content;
    await this.validate();
  }

  public static async new(payload: CommentEntityPayload): Promise<Comment> {
    const comment = new Comment(payload);
    await comment.validate();
    return comment;
  }
}

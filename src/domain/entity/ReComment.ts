import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { CommentEntityPayload, EditCommentEntityPayload } from './types/payloads/CommentEntityPayload';

/**
 * @description 소모임 대댓글
 */
export class ReComment extends Entity {
  @IsString()
  private _content: string;

  constructor(payload: CommentEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._content = payload.content;
  }

  public get content() {
    return this._content;
  }

  public async edit(payload: EditCommentEntityPayload): Promise<void> {
    const { content } = payload;
    if (content) this._content = content;
    await this.validate();
  }

  public static async new(payload: CommentEntityPayload): Promise<ReComment> {
    const reComment = new ReComment(payload);
    await reComment.validate();
    return reComment;
  }
}

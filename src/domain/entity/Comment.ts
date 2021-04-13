import { Entity } from '@/common/entity/Entity';
import { Type } from 'class-transformer';
import { IsArray, IsInstance, IsString, NotEquals } from 'class-validator';
import { CommentEntityPayload, EditCommentEntityPayload } from './types/payloads/CommentEntityPayload';
import { User } from './User';

/**
 * @description 소모임 댓글
 */
export class Comment extends Entity {
  @IsString()
  private _content: string;
  @IsInstance(User)
  @NotEquals(null)
  @NotEquals(undefined)
  private _user: User;
  @IsArray()
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => Comment)
  private _replies?: Comment[];

  constructor(payload: CommentEntityPayload) {
    super();
    this._id = payload.id || -1;
    this._user = payload.user;
    this._replies = payload.replies || new Array<Comment>();
    this._content = payload.content;
  }

  public get content() {
    return this._content;
  }

  public get user() {
    return this._user;
  }

  public get replies() {
    return this._replies;
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

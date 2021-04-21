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
  private content: string;
  @IsInstance(User)
  @NotEquals(null)
  @NotEquals(undefined)
  private user: User;
  @IsArray()
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => Comment)
  private replies: Comment[];

  public getContent(): string {
    return this.content;
  }

  public getUser(): User {
    return this.user;
  }

  public getReplies(): Comment[] {
    return this.replies;
  }

  constructor(payload: CommentEntityPayload) {
    super();
    this.id = payload.id || -1;
    this.user = payload.user;
    this.replies = payload.replies || new Array<Comment>();
    this.content = payload.content;
  }

  public async edit(payload: EditCommentEntityPayload): Promise<void> {
    const { content } = payload;
    if (content) this.content = content;
    await this.validate();
  }

  public static async new(payload: CommentEntityPayload): Promise<Comment> {
    const comment = new Comment(payload);
    await comment.validate();
    return comment;
  }
}

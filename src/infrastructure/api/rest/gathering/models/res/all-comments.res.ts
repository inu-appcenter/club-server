import { ApiProperty } from '@nestjs/swagger';
import { CommentRes } from './comment.res';

export class AllCommentsRes {
  @ApiProperty({ isArray: true, type: CommentRes })
  comments: CommentRes[];
}

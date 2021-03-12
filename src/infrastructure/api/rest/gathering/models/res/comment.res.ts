import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CommentRes {
  @ApiProperty({ type: Number, description: '댓글 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: String, description: '댓글 내용', example: '참여하겠습니다~' })
  @IsString()
  content: string;

  @ApiProperty({ type: String, description: '작성자', example: '빡태호' })
  @IsString()
  userNickname: string;

  @ApiProperty({ type: String, description: '상대적인 시간', example: '1분 전' })
  @IsString()
  relativeTime: string;
}

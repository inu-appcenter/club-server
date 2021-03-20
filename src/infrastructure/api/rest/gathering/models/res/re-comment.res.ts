import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class ReCommentRes {
  @ApiProperty({ type: Number, description: '대댓글 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: String, description: '대댓글 내용', example: '참여 감사합니다~' })
  @IsString()
  content: string;

  @ApiProperty({ type: Number, description: '작성자 pk', example: 1 })
  @IsNumber()
  userId: number;

  @ApiProperty({ type: String, description: '상대적인 시간', example: '1분 전' })
  @IsString()
  relativeTime: string;
}

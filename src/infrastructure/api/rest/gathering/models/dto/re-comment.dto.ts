import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReCommentDTO {
  @ApiProperty({ type: String, description: '대댓글 내용', example: '가능하겠어요?' })
  @IsString()
  content: string;
}

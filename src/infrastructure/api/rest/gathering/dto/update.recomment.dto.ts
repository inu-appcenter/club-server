import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateReCommentDTO {
  @ApiProperty({ type: String, description: '대댓글 내용', example: '학번이 어떻게 되니?' })
  @IsString()
  content: string;
}

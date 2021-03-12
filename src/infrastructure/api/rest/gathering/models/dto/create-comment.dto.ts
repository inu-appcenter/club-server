import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommentDTO {
  @ApiProperty({ type: String, description: '댓글 내용', example: '중간에 탈주 가능한가요?' })
  @IsString()
  content: string;
}

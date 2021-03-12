import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateReCommentDTO {
  @ApiProperty({ type: String, description: '대댓글 내용', example: '같이 탈주해요!' })
  @IsString()
  content: string;
}

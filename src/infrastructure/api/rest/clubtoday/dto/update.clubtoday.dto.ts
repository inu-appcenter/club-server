import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

// todo: html로 받는다는 건디.. 이미지들은 어쩌지
export class UpdateClubTodayDTO {
  @ApiProperty({ type: String, description: 'html 코드', example: '<h1>프론트랑 논의가 필요해</h1>' })
  @IsString()
  html: string;
}

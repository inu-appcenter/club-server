import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ClubTodayDTO {
  @ApiProperty({ type: String, description: '헤더 이미지', example: 'http://...' })
  @IsString()
  headerImage: string;

  @ApiProperty({ type: String, description: '제목', example: '앱센터 13.5기 모집' })
  @IsString()
  title: string;

  @ApiProperty({ type: String, description: 'html 코드', example: '<h1>프론트랑 논의가 필요합니다</h1>' })
  @IsString()
  body: string;
}

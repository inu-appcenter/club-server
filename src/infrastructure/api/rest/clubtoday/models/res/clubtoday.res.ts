import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

// todo: 관리자의 모든 정보말고 pk랑 이름만 보여줘야 하나
// todo: 동아리 정보도 필요하려나
export class ClubTodayRes {
  @ApiProperty({ type: Number, description: '클럽투데이 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;
  @ApiProperty({ type: String, description: '클럽투데이 제목', example: '프로그래밍이란?' })
  @IsString()
  title: string;
  @ApiProperty({ type: String, description: '헤더이미지', example: 'http://...' })
  @IsString()
  headerImage: string;
  @ApiProperty({ type: String, description: 'html 코드', example: '<h1>프론트랑 논의가 필요합니다</h1>' })
  @IsString()
  body: string;
  @ApiProperty({ type: Number, description: '동아리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  clubId: number;
  @ApiProperty({ type: String, description: '동아리 이름', example: '앱센터' })
  @IsString()
  clubName: string;
}

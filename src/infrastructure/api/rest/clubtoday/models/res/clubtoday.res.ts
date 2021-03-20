import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

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

  constructor(id, title, headerImage, body, clubId) {
    this.id = id;
    this.title = title;
    this.headerImage = headerImage;
    this.body = body;
    this.clubId = clubId;
  }
}

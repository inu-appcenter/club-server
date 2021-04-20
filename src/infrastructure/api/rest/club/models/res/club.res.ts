import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class ApplicationInfoRes {
  @ApiProperty({ type: String, description: '카카오톡 id', example: 'kakao1234' })
  @IsString()
  kakaoId: string;
  @ApiProperty({ type: String, description: '오픈채팅 링크', example: 'open.kakao...' })
  @IsString()
  openChatUrl: string;
  @ApiProperty({ type: String, description: '웹 링크', example: 'http://...' })
  @IsString()
  websiteUrl: string;
  @ApiProperty({ type: String, description: '전화번호', example: '032-000-0000' })
  @IsString()
  contact: string;
  @ApiProperty({ type: String, description: '기타', example: '~~~' })
  etc: string;

  constructor(model?: Partial<any>) {
    Object.assign(this, model);
  }
}

export class CategoryRes {
  @ApiProperty({ type: Number, description: '카테고리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: String, description: '카테고리 이름', example: '교양학술' })
  @IsString()
  name: string;

  constructor(model?: Partial<any>) {
    Object.assign(this, model);
  }
}

export class ClubRes {
  @ApiProperty({ type: Number, description: '동아리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: Number, description: '관리자 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  adminId: number;

  @ApiProperty({ type: String, description: '동아리 이름', example: '앱센터' })
  @IsString()
  clubName: string;

  @ApiProperty({ type: String, description: '동아리 위치', example: '인천대 4호관' })
  @IsString()
  location: string;

  @ApiProperty({ type: String, description: '동아리 내용', example: '아 이제 예제 적는 것도 귀찮' })
  @IsString()
  summary: string;

  @ApiProperty({ type: ApplicationInfoRes, description: '지원 정보' })
  applicationInfo: ApplicationInfoRes;

  @ApiProperty({ type: Number, description: '카테고리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  categoryId: number;

  @ApiProperty({
    isArray: true,
    required: false,
    type: String,
    description: '이미지들',
    example: ['http://...', 'http://...'],
  })
  imageUrls?: string[];

  @ApiProperty({ isArray: true, type: Number, description: '키워드 id 리스트', example: [1, 2, 3] })
  keywordIds: number[];

  constructor(model?: Partial<any>) {
    Object.assign(this, model);
  }
}

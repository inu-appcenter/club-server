import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateClubDTO {
  // 이미지들은 유효성 검사를 뺄 것이다~
  @ApiProperty({
    required: false,
    type: 'array',
    description: '동아리 사진들',
    items: { type: 'string', format: 'binary' },
  })
  images: any[];

  @ApiProperty({ type: Number, description: '카테고리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  categoryId: number;

  @ApiProperty({ type: Number, description: '관리자 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  adminId: number;

  @ApiProperty({ type: String, description: '카카오톡 아이디', example: 'kakao1234' })
  kakaoId: string;

  @ApiProperty({ type: String, description: '오픈채팅 링크', example: 'open.kakao...' })
  openChatUrl: string;

  @ApiProperty({ type: String, description: '웹사이트 링크', example: 'http://...' })
  websiteUrl: string;

  @ApiProperty({ type: String, description: '전화번호', example: '032-000-0000' })
  contact: string;

  @ApiProperty({ type: String, description: '기타', example: 'blabla' })
  etc: string;

  @ApiProperty({ type: String, description: '동아리 이름', example: '앱센터' })
  @IsString()
  clubName: string;

  @ApiProperty({ type: String, description: '위치', example: '4호관 어딘가' })
  @IsString()
  location: string;

  @ApiProperty({ type: String, description: '내용', example: '안녕하십니까.....' })
  @IsString()
  summary: string;

  @ApiProperty({ type: String, description: '키워드', example: '코딩,개발,IT' })
  @IsString()
  keywords: string;
}

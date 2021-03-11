import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateClubDTO {
  // 이미지들은 유효성 검사를 뺄 것이다~
  @ApiProperty({
    type: 'array',
    description: '동아리 사진들',
    items: { type: 'file', format: 'binary' },
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

  @ApiProperty({ type: Number, description: '지원 정보 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  applicationInfoId: number;

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

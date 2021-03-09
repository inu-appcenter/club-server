import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateClubDTO {
  @ApiProperty({ type: Number, description: '카테고리 pk', example: 1 })
  @IsNumber()
  categoryId: number;

  @ApiProperty({ type: Number, description: '관리자 pk', example: 1 })
  @IsNumber()
  adminId: number;

  @ApiProperty({ type: Number, description: '지원 정보 pk', example: 1 })
  @IsNumber()
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

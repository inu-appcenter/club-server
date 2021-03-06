import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class GatheringDTO {
  @ApiProperty({ type: String, description: '소모임 제목', example: '모각코에 관심 있으신 분!' })
  @IsString()
  title: string;

  @ApiProperty({ type: String, description: '소모임 내용', example: '모여서 각자 코딩..' })
  @IsString()
  body: string;

  @ApiProperty({ type: String, description: '오픈채팅 링크', example: 'open.kakao...' })
  @IsString()
  openChatUrl: string;

  @ApiProperty({ type: Number, description: '모집 인원', example: 4 })
  @IsNumber()
  @Type(() => Number)
  numberOfPersonsToInvite: number;

  @ApiProperty({ type: Date, description: '모집 마감일', example: '2021.12.10' })
  @IsDate()
  @Type(() => Date)
  deadline: Date;

  @ApiProperty({ type: Number, description: '카테고리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  categoryId: number;
}

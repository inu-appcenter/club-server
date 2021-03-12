import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CategoryRes } from '../../../club/models/res/club.res';
import { CommentRes } from './comment.res';

export class GatheringRes {
  @ApiProperty({ type: Number, description: '소모임 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: String, description: '소모임 제목', example: '보드게임에 관심 있으신 분' })
  @IsString()
  title: string;

  @ApiProperty({ type: String, description: '소모임 내용', example: '.....' })
  @IsString()
  body: string;

  @ApiProperty({ type: Number, description: '참여 인원', example: 5 })
  @IsNumber()
  @Type(() => Number)
  numberOfPersonsJoined: number;

  @ApiProperty({ type: Number, description: '모집 인원', example: 10 })
  @IsNumber()
  @Type(() => Number)
  numberOfPersonsToInvite: number;

  @ApiProperty({ type: Date, description: '마감일', example: '2021.04.01' })
  @IsDate()
  @Type(() => Date)
  deadline: Date;

  @ApiProperty({ type: String, description: '오픈채팅 링크', example: 'open.kakako...' })
  @IsString()
  openChatUrl: string;

  @ApiProperty({ type: String, description: '작성자 닉네임', example: '도비는자유에요' })
  @IsString()
  userNickname: string;

  @ApiProperty({ type: String, description: '상대적인 시간', example: '1분 전' })
  @IsString()
  relativeTime: string;

  @ApiProperty({ type: CategoryRes })
  category: CategoryRes;

  @ApiProperty({ isArray: true, type: CommentRes })
  comments: CommentRes[];
}

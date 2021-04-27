import { getDayJs } from '@/common/utils/dayjs/getDayJs';
import { Gathering } from '@/domain/entity/Gathering';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

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

  @ApiProperty({ type: Date, description: '마감일', example: '2021-12-10T00:00:00.000Z' })
  @IsDate()
  @Type(() => Date)
  deadline: Date;

  @ApiProperty({ type: String, description: '오픈채팅 링크', example: 'open.kakako...' })
  @IsString()
  openChatUrl: string;

  @ApiProperty({ type: Number, description: '작성자 pk', example: 1 })
  @IsNumber()
  userId: number;

  @ApiProperty({ type: String, description: '상대적인 시간', example: '1분 전' })
  @IsString()
  relativeTime: string;

  @ApiProperty({ type: Number })
  categoryId: number;

  @ApiProperty({ description: '댓글 id 리스트', isArray: true, type: Number })
  commentIds: number[];

  @ApiProperty({ type: Boolean, description: '마감 여부', example: false })
  closed: boolean;

  @ApiProperty({ description: '참가자 id 리스트', isArray: true, type: Number })
  participantIds: number[];

  constructor(partial: Partial<Gathering>) {
    Object.assign(this, partial);
    this.relativeTime = getDayJs().to(partial.createdAt);
  }
}

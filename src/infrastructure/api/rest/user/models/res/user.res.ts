import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class UserRes {
  @ApiProperty({ type: Number, description: '사용자 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;
  @ApiProperty({ type: Number, description: '학번', example: 208001535 })
  @IsNumber()
  @Type(() => Number)
  studentId: number;
  @ApiProperty({ type: String, description: '사용자 닉네임', example: '도비는자유에요' })
  @IsString()
  nickname: string;

  constructor(id, studentId, nickname) {
    this.id = id;
    this.studentId = studentId;
    this.nickname = nickname;
  }
}

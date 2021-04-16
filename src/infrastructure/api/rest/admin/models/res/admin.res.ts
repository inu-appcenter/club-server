import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class AdminRes {
  @ApiProperty({ type: Number, description: '관리자 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: Number, description: '학번', example: 208001535 })
  @IsNumber()
  @Type(() => Number)
  studentId: number;

  @ApiProperty({ type: String, description: '이름', example: '킹병준' })
  @IsString()
  name: string;

  @ApiProperty({ type: String, description: '휴대폰 번호', example: '010-0000-0000' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ type: Number, description: '동아리 pk', example: 1, nullable: true })
  @IsNumber()
  @Type(() => Number)
  clubId?: number;
}

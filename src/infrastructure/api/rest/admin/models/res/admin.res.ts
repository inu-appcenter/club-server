import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class AdminRes {
  @ApiProperty({ type: 'number', description: '관리자 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ type: 'string', description: '이름', example: '킹병준' })
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', description: '휴대폰 번호', example: '010-0000-0000' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ type: 'number', description: '동아리 pk', example: 1 })
  @IsNumber()
  @Type(() => Number)
  clubId?: number;
}

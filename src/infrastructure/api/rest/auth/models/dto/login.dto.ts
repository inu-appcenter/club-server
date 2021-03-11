import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ type: 'number', description: '학번', example: 208001535 })
  @IsNumber()
  @Type(() => Number)
  studentId: number;

  @ApiProperty({ type: 'string', description: '비밀번호', example: 'password1234' })
  @IsString()
  password: string;
}

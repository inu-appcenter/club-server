import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ type: Number, description: '학번', example: 208001535 })
  @MaxLength(8)
  studentId: number;

  @ApiProperty({ type: String, description: '비밀번호', example: 'password1234' })
  @IsString()
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RemoveAdminDTO {
  @ApiProperty({ type: 'string', description: '비밀번호', example: '앱센터123' })
  @IsString()
  password: string;
}

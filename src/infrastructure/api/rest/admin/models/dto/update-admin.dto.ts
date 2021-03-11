import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateAdminDTO {
  @ApiProperty({ type: 'string', description: '이름', example: '킹병준' })
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', description: '휴대폰 번호', example: '010-0000-0000' })
  @IsString()
  phoneNumber: string;
}

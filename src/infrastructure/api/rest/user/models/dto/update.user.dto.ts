import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDTO {
  @ApiProperty({ type: String, description: '닉네임', example: '인천대 1짱' })
  @IsString()
  nickname: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty({ type: String, description: '닉네임', example: '인천대 1짱' })
  @IsString()
  nickname: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ type: String, description: '닉네임', example: '인천대 1짱' })
  nickname: string;
}
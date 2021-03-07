import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({
    example: 1,
    description: '유저의 pk값을 입력합니다.',
    required: true,
  })
  public userId: number;
}

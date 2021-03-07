import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({ type: 'number' })
  public userId: number;
}

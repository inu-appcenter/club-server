import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: 'number' })
  public studentId: number;

  @ApiProperty({ type: 'string' })
  public nickname: string;
}

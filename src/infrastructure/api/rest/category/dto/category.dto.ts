import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CategoryDTO {
  @ApiProperty({ description: '카테고리 이름', type: String, example: '문화' })
  @IsString()
  name: string;
}

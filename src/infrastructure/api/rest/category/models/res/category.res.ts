import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CategoryRes {
  @ApiProperty({ description: '카테고리 pk', type: Number, example: 1 })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({ description: '카테고리 이름', type: String, example: '문화' })
  @IsString()
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

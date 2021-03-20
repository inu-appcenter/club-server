import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UploadRes {
  @ApiProperty({ description: '이미지 링크', type: String })
  @IsString()
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

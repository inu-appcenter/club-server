import { ApiProperty } from '@nestjs/swagger';
import { ClubRes } from './club.res';

// class RecommendClubRes {
//   @ApiProperty({ type: Number, description: '동아리 pk', example: 1 })
//   @IsNumber()
//   @Type(() => Number)
//   id: number;

//   @ApiProperty({ type: String, description: '동아리 이름', example: '앱센터' })
//   @IsString()
//   clubName: string;

//   @ApiProperty({ type: String, description: '동아리 내용', example: '전산원 산하 소프트웨어 개발 동아리..' })
//   @IsString()
//   summary: string;

//   @ApiProperty({ type: String, description: '이미지', example: 'http://전산원/이미지' })
//   @IsString()
//   imageUrl: string;
// }

export class RecommendClubsRes {
  @ApiProperty({ isArray: true, type: ClubRes, description: '동아리들' })
  clubs: ClubRes[];
}

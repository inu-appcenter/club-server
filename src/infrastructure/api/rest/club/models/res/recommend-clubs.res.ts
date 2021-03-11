import { ApiProperty } from '@nestjs/swagger';

class RecommendClubRes {
  @ApiProperty({ type: 'number', description: '동아리 pk', example: 1 })
  id: number;

  @ApiProperty({ type: 'string', description: '동아리 이름', example: '앱센터' })
  clubName: string;

  @ApiProperty({ type: 'string', description: '동아리 내용', example: '전산원 산하 소프트웨어 개ㅅ발 동아리..' })
  summary: string;

  @ApiProperty({ type: 'string', description: '이미지', example: 'http://전산원/이미지' })
  imageUrl: string;
}

export class RecommendClubsRes {
  @ApiProperty({ isArray: true, type: RecommendClubRes, description: '동아리들' })
  clubs: RecommendClubRes[];
}

import { ApiProperty } from '@nestjs/swagger';

export class ApplicationInfoRes {
  @ApiProperty({ type: Number, description: '지원정보 pk', example: 1 })
  id: number;
  @ApiProperty({ type: String, description: '카카오톡 id', example: 'abcd123' })
  kakaoId: string;
  @ApiProperty({ type: String, description: '오픈채팅 링크', example: 'http://...' })
  openChatUrl: string;
  @ApiProperty({ type: String, description: '웹 링크', example: 'http://...' })
  websiteUrl: string;
  @ApiProperty({ type: String, description: '전화번호', example: 1 })
  contact: string;
  @ApiProperty({ type: String, description: '기타', example: '' })
  etc: string;
}

export class CategoryRes {
  @ApiProperty({ type: Number, description: '카테고리 pk', example: 1 })
  id: number;

  @ApiProperty({ type: String, description: '카테고리 이름', example: '교양학술' })
  name: string;
}

export class ClubRes {
  @ApiProperty({ type: Number, description: '동아리 pk', example: 1 })
  id: number;

  @ApiProperty({ type: String, description: '동아리 이름', example: '앱센터' })
  clubName: string;

  @ApiProperty({ type: String, description: '동아리 위치', example: '인천대 4호관' })
  location: string;

  @ApiProperty({ type: String, description: '동아리 내용', example: '아 이제 예제 적는 것도 귀찮' })
  summary: string;

  @ApiProperty({ type: ApplicationInfoRes })
  applicationInfo: ApplicationInfoRes;

  @ApiProperty({ type: CategoryRes })
  category: CategoryRes;

  @ApiProperty({
    isArray: true,
    required: false,
    type: String,
    description: '이미지들',
    example: ['http://...', 'http://...'],
  })
  images?: string[];
}

export class AllClubsRes {
  @ApiProperty({ isArray: true, type: ClubRes })
  clubs: ClubRes[];
}

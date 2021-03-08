import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

// todo: 웹
@ApiTags('Club')
@Controller('clubs')
export class ClubsController {
  @ApiOperation({ summary: '동아리 상세 조회' })
  @Get(':clubId')
  getClubById() {
    return;
  }

  // todo: 어떻게 추천 해줄거냐고
  @ApiOperation({ summary: '동아리 추천' })
  @Get('recommendation')
  recommendClub() {
    return;
  }

  @ApiOperation({ summary: '동아리 검색' })
  @Get('search')
  searchClub() {
    return;
  }

  //   @ApiOperation({ summary: '동아리 생성' })
  //   @Post()
  //   createClub() {
  //     return;
  //   }

  @ApiOperation({ summary: '카테고리별 동아리 조회' })
  @Get('category/:categoryId')
  getClubsByCategoryId() {
    return;
  }
}

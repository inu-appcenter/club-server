import { SWAGGER_TAG_CLUB_SEARCH } from '@/common/swagger/SwaggerTags';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchClubsRes } from '../models/res/search-clubs.res';

@ApiTags(SWAGGER_TAG_CLUB_SEARCH.tag)
@Controller('clubs/search')
export class ClubSearchController {
  @ApiOperation({ summary: '동아리 검색 (동아리 이름이나 키워드로 검색 가능)' })
  @ApiOkResponse({ description: '성공', type: SearchClubsRes })
  @Get()
  async searchClub(@Query('query') query: string): Promise<SearchClubsRes> {
    return;
  }

  @ApiOperation({ summary: '카테고리별 동아리 검색' })
  @ApiOkResponse({ description: '성공', type: SearchClubsRes })
  @Get('categories/:categoryId')
  async searchClubsByCategory(@Param('categoryId') categoryId: number): Promise<SearchClubsRes> {
    return;
  }
}

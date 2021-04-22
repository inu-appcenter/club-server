import { SWAGGER_TAG_CLUB_SEARCH } from '@/common/swagger/SwaggerTags';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClubRes } from '../models/res/club.res';
import { ClubSearchService } from '../services/club-search.service';

@ApiTags(SWAGGER_TAG_CLUB_SEARCH.tag)
@Controller('clubs/search')
export class ClubSearchController {
  constructor(private readonly clubSearchService: ClubSearchService) {}

  @ApiOperation({ summary: '동아리 검색 (동아리 이름이나 키워드로 검색 가능)' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubRes })
  @Get('query')
  async searchClub(@Query('query') query: string): Promise<ClubRes[]> {
    return await this.clubSearchService.searchClubs(query);
  }

  @ApiOperation({ summary: '카테고리별 동아리 검색' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubRes })
  @Get('category')
  async searchClubsByCategory(@Query('categoryId') categoryId: number): Promise<ClubRes[]> {
    return await this.clubSearchService.getClubsByCategory(categoryId);
  }
}

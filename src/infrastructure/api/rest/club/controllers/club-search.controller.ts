import { SWAGGER_TAG_CLUB_SEARCH } from '@/common/swagger/SwaggerTags';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_CLUB_SEARCH.tag)
@Controller('clubs/search')
export class ClubSearchController {
  // todo: 쿼리스트링
  @ApiOperation({ summary: '동아리 검색' })
  @ApiOkResponse({ description: '성공' })
  @Get()
  searchClub() {
    return;
  }

  // todo: 쿼리스트링
  @ApiOperation({ summary: '카테고리별 동아리 검색' })
  @ApiOkResponse({ description: '성공' })
  @Get('category')
  searchClubsByCategory() {
    return;
  }
}

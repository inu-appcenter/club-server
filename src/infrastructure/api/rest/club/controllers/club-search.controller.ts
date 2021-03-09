import { SWAGGER_TAG_CLUB_SEARCH } from '@/common/swagger/SwaggerTagS';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_CLUB_SEARCH.tag)
@Controller('clubs/search')
export class ClubSearchController {
  @ApiOperation({ summary: '동아리 검색' })
  @Get()
  searchClub() {
    return;
  }

  // todo: 쿼리스트링
  @ApiOperation({ summary: '카테고리별 동아리 검색' })
  @Get('category')
  searchClubsByCategory() {
    return;
  }
}

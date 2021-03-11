import { SWAGGER_TAG_CLUB_RECOMMENDATION } from '@/common/swagger/SwaggerTags';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RecommendClubsRes } from '../models/res/recommend-clubs.res';

@ApiTags(SWAGGER_TAG_CLUB_RECOMMENDATION.tag)
@Controller('clubs/recommendation')
export class ClubRecommendationController {
  // todo: 추천 방법?
  @ApiOperation({ summary: '동아리 추천' })
  @ApiOkResponse({ description: '성공', type: RecommendClubsRes })
  @Get()
  async recommendClubs(): Promise<RecommendClubsRes> {
    return;
  }
}

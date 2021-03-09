import { SWAGGER_TAG_CLUB_RECOMMENDATION } from '@/common/swagger/SwaggerTags';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_CLUB_RECOMMENDATION.tag)
@Controller('clubs/recommendation')
export class ClubRecommendationController {
  // todo: 어떻게 추천 해줄거냐고
  @ApiOperation({ summary: '동아리 추천' })
  @ApiOkResponse({ description: '성공' })
  @Get()
  recommendClub() {
    return;
  }
}

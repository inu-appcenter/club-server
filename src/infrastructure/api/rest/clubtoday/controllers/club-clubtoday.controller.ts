import { SWAGGER_TAG_CLUB } from '@/common/swagger/SwaggerTags';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClubTodayRes } from '../models/res/clubtoday.res';
import { ClubTodayByClubService } from '../services/club-clubtoday.service';

@ApiTags(SWAGGER_TAG_CLUB.tag)
@ApiInternalServerErrorResponse({ description: '에러 메세지를 알려주세요!' })
@Controller('clubs/:clubId/clubtoday')
export class ClubClubTodayController {
  constructor(private readonly clubTodayByClubService: ClubTodayByClubService) {}

  @ApiOperation({ summary: '해당 동아리의 클럽투데이 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubTodayRes })
  @Get()
  async getClubTodayListByClubId(@Param('clubId') clubId: number) {
    return this.clubTodayByClubService.getClubTodayListByClubId(clubId);
  }
}

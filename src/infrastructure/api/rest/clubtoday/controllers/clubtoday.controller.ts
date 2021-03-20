import { SWAGGER_TAG_CLUBTODAY } from '@/common/swagger/SwaggerTags';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClubTodayRes } from '../models/res/clubtoday.res';
import { ClubTodayService } from '../services/clubtoday.service';

@ApiTags(SWAGGER_TAG_CLUBTODAY.tag)
@Controller('clubtoday')
export class ClubTodayController {
  constructor(private readonly clubTodayService: ClubTodayService) {}

  @ApiOperation({ summary: '클럽투데이 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubTodayRes })
  @Get()
  async getClubTodayList() {
    return;
  }
}

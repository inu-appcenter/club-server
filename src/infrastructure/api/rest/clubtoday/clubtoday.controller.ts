import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ClubToday')
@Controller('clubtoday')
export class ClubTodayController {
  @ApiOperation({ summary: '클럽투데이 모두 조회' })
  @Get()
  getClubToday() {
    return;
  }

  // todo: offset, limit
  @ApiOperation({ summary: '클럽투데이 상세 조회' })
  @Get(':clubtodayId')
  getClubTodayById() {
    return;
  }
}

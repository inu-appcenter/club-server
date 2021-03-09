import { SWAGGER_TAG_CLUBTODAY } from '@/common/swagger/SwaggerTagS';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_CLUBTODAY.tag)
@Controller('clubtoday')
export class ClubTodayController {
  // todo: offset, limit
  @ApiOperation({ summary: '클럽투데이 모두 조회' })
  @Get()
  getAllClubToday() {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 상세 조회' })
  @Get(':clubTodayId')
  getClubTodayById() {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 등록' })
  @Post()
  createClubToday() {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 수정' })
  @Put(':clubTodayId')
  updateClubDayById() {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 삭제' })
  @Delete(':clubTodayId')
  removeClubTodayById() {
    return;
  }
}

import { SWAGGER_TAG_CLUBTODAY } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClubTodayDTO } from '../dto/create.clubtoday.dto';
import { UpdateClubTodayDTO } from '../dto/update.clubtoday.dto';

@ApiTags(SWAGGER_TAG_CLUBTODAY.tag)
@Controller('clubtoday')
export class ClubTodayController {
  // todo: offset, limit
  @ApiOperation({ summary: '클럽투데이 모두 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get()
  getAllClubToday() {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 상세 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get(':clubTodayId')
  getClubTodayById() {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateClubTodayDTO })
  @Post()
  createClubToday(@Body(ValidationPipe) createClubTodayDto: CreateClubTodayDTO) {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 수정' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: UpdateClubTodayDTO })
  @Put(':clubTodayId')
  updateClubDayById(@Body(ValidationPipe) updateClubTodayDto: UpdateClubTodayDTO) {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':clubTodayId')
  removeClubTodayById() {
    return;
  }
}

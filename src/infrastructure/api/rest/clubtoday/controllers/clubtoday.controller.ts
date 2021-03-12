import { SWAGGER_TAG_CLUBTODAY } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClubTodayDTO } from '../models/dto/create-clubtoday.dto';
import { UpdateClubTodayDTO } from '../models/dto/update-clubtoday.dto';
import { AllClubTodayRes } from '../models/res/all-clubtoday.res';
import { ClubTodayRes } from '../models/res/clubtoday.res';

@ApiTags(SWAGGER_TAG_CLUBTODAY.tag)
@Controller('clubs/:clubId/clubtoday')
export class ClubTodayController {
  // todo: offset, limit
  @ApiOperation({ summary: '해당 동아리의 클럽투데이 모두 조회' })
  @ApiOkResponse({ description: '성공', type: AllClubTodayRes })
  @Get()
  async getAllClubTodayByClubId(@Param('clubId') clubId: number) {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 상세 조회' })
  @ApiOkResponse({ description: '성공', type: ClubTodayRes })
  @Get(':clubTodayId')
  async getClubTodayById(@Param('clubId') clubId: number, @Param('clubTodayId') clubTodayId: number) {
    return;
  }

  // todo: 이미지 등록은?
  @ApiOperation({ summary: '클럽투데이 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateClubTodayDTO })
  @Post()
  async createClubToday(@Param('clubId') clubId: number, @Body() createClubTodayDto: CreateClubTodayDTO) {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 수정' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: UpdateClubTodayDTO })
  @Put(':clubTodayId')
  async updateClubDayById(
    @Param('clubId') clubId: number,
    @Param('clubTodayId') clubTodayId: number,
    @Body() updateClubTodayDto: UpdateClubTodayDTO,
  ) {
    return;
  }

  @ApiOperation({ summary: '클럽투데이 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':clubTodayId')
  async removeClubTodayById(@Param('clubId') clubId: number, @Param('clubTodayId') clubTodayId: number) {
    return;
  }
}

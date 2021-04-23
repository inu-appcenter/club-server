import { SWAGGER_TAG_CLUBTODAY } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateClubTodayDTO } from '../models/dto/create-clubtoday.dto';
import { UpdateClubTodayDTO } from '../models/dto/update-clubtoday.dto';
import { ClubTodayRes } from '../models/res/clubtoday.res';
import { ClubTodayService } from '../services/clubtoday.service';

@ApiTags(SWAGGER_TAG_CLUBTODAY.tag)
@ApiInternalServerErrorResponse({ description: '에러 메세지를 알려주세요!' })
@Controller('clubtoday')
export class ClubTodayController {
  constructor(private readonly clubTodayService: ClubTodayService) {}

  @ApiOperation({ summary: '클럽투데이 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubTodayRes })
  @Get()
  async getClubTodayList() {
    return await this.clubTodayService.getClubTodayList();
  }

  @ApiOperation({ summary: '클럽투데이 상세 조회' })
  @ApiOkResponse({ description: '성공', type: ClubTodayRes })
  @ApiNotFoundResponse({ description: 'ClubToday Not Found' })
  @Get(':clubTodayId')
  async getClubTodayById(@Param('clubTodayId') clubTodayId: number) {
    return await this.clubTodayService.getClubTodayById(clubTodayId);
  }

  // todo: 인증
  @ApiOperation({ summary: '클럽투데이 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @ApiBody({ type: CreateClubTodayDTO })
  @Post()
  async createClubToday(@Body() createClubTodayDto: CreateClubTodayDTO) {
    const adminId = 5;
    const clubId = 10;
    return await this.clubTodayService.createClubToday(adminId, clubId, createClubTodayDto);
  }

  // todo: 인증
  @ApiOperation({ summary: '클럽투데이 수정' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @ApiNotFoundResponse({ description: 'ClubToday Not Found' })
  @ApiBody({ type: UpdateClubTodayDTO })
  @Put(':clubTodayId')
  async updateClubDayById(@Param('clubTodayId') clubTodayId: number, @Body() updateClubTodayDto: UpdateClubTodayDTO) {
    return await this.clubTodayService.updateClubTodayById(clubTodayId, updateClubTodayDto);
  }

  // todo: 인증
  @ApiOperation({ summary: '클럽투데이 삭제' })
  @ApiOkResponse({ description: '성공' })
  @ApiNotFoundResponse({ description: 'ClubToday Not Found' })
  @Delete(':clubTodayId')
  async removeClubTodayById(@Param('clubTodayId') clubTodayId: number) {
    return await this.clubTodayService.removeClubTodayById(clubTodayId);
  }
}

import { SWAGGER_TAG_CLUB } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClubDTO } from '../models/dto/create-club.dto';
import { UpdateClubDTO } from '../models/dto/update-club.dto';
import { AllClubsRes, ClubRes } from '../models/res/club.res';

@ApiTags(SWAGGER_TAG_CLUB.tag)
@Controller('clubs')
export class ClubController {
  @ApiOperation({ summary: '동아리 생성' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: CreateClubDTO })
  @Post()
  async createClub(@Body() createClubDto: CreateClubDTO) {
    console.log({ ...createClubDto });
    return;
  }

  @ApiOperation({ summary: '동아리 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubRes })
  @Get()
  async getAllClubs(): Promise<AllClubsRes> {
    return;
  }

  @ApiOperation({ summary: '동아리 상세 조회' })
  @ApiOkResponse({ description: '성공', type: ClubRes })
  @Get(':clubId')
  async getClubById(@Param('clubId') clubId: number): Promise<ClubRes> {
    return;
  }

  @ApiOperation({ summary: '동아리 수정' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: UpdateClubDTO })
  @Put(':clubId')
  async updateClubById(@Param('clubId') clubId: number, @Body() createClubDto: UpdateClubDTO) {
    return;
  }

  @ApiOperation({ summary: '동아리 삭제' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete('')
  async removeClubById(@Param('clubId') clubId: number) {
    return;
  }
}

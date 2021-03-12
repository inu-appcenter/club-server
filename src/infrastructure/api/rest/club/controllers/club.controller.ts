import { SWAGGER_TAG_CLUB } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllClubTodayRes } from '../../clubtoday/models/res/all-clubtoday.res';
import { CreateClubDTO } from '../models/dto/create-club.dto';
import { UpdateClubDTO } from '../models/dto/update-club.dto';
import { AllClubsRes, ClubRes } from '../models/res/club.res';
import { CreateClubRes } from '../models/res/create-club.res';
import { UpdateClubRes } from '../models/res/update-club.res';

@ApiTags(SWAGGER_TAG_CLUB.tag)
@Controller('clubs')
export class ClubController {
  // todo: 생성 시 응답을 어떻게 줄까
  @ApiOperation({ summary: '동아리 생성' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateClubDTO })
  @UseInterceptors(FilesInterceptor('images'))
  @Post()
  async createClub(@UploadedFiles() images, @Body() createClubDto: CreateClubDTO) {
    console.log(images);
    console.log({ ...createClubDto });
    return;
  }

  @ApiOperation({ summary: '동아리 모두 조회' })
  @ApiOkResponse({ description: '성공', type: AllClubsRes })
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

  // todo: 동아리를 수정할 때 이미지는 어찌?
  // todo: 응답은?
  @ApiOperation({ summary: '동아리 수정' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('images'))
  @ApiBody({ type: UpdateClubDTO })
  @Put(':clubId')
  async updateClubById(@Param('clubId') clubId: number, @UploadedFiles() images, @Body() createClubDto: UpdateClubDTO) {
    return;
  }

  // todo: 응답은?
  @ApiOperation({ summary: '동아리 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete('')
  async removeClubById(@Param('clubId') clubId: number) {
    return;
  }

  // todo: offset, limit
  @ApiOperation({ summary: '클럽투데이 모두 조회' })
  @ApiOkResponse({ description: '성공', type: AllClubTodayRes })
  @Get('clubtoday/all')
  async getAllClubToday() {
    return;
  }
}

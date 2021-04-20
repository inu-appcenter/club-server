import { SWAGGER_TAG_CLUB } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClubDTO } from '../models/dto/create-club.dto';
import { UpdateClubDTO } from '../models/dto/update-club.dto';
import { ClubRes } from '../models/res/club.res';
import { ClubService } from '../services/club.service';

@ApiTags(SWAGGER_TAG_CLUB.tag)
@Controller('clubs')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @ApiOperation({ summary: '동아리 생성' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: CreateClubDTO })
  @Post()
  async createClub(@Body() createClubDto: CreateClubDTO) {
    // todo: 관리자 id가 있다고 가정
    const adminId = 4;
    await this.clubService.createClub(createClubDto, adminId);
    return {};
  }

  @ApiOperation({ summary: '동아리 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ClubRes })
  @Get()
  async getClubs(): Promise<ClubRes[]> {
    const clubs = await this.clubService.getClubs();
    return clubs;
  }

  @ApiOperation({ summary: '동아리 상세 조회' })
  @ApiOkResponse({ description: '성공', type: ClubRes })
  @Get(':clubId')
  async getClubById(@Param('clubId') clubId: number): Promise<ClubRes> {
    const club = await this.clubService.getClubById(clubId);
    return club;
  }

  @ApiOperation({ summary: '동아리 수정' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: UpdateClubDTO })
  @Put(':clubId')
  async updateClubById(@Param('clubId') clubId: number, @Body() updateClubDto: UpdateClubDTO) {
    // todo: 임시 id
    const adminId = 5;
    await this.clubService.updateClub(updateClubDto, clubId, adminId);
    return {};
  }

  @ApiOperation({ summary: '동아리 삭제' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete('')
  async removeClubById(@Param('clubId') clubId: number) {
    return;
  }
}

import { SWAGGER_TAG_CLUB } from '@/common/swagger/SwaggerTags';
import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_CLUB.tag)
@Controller('clubs')
export class ClubController {
  @ApiOperation({ summary: '동아리 생성' })
  @Post()
  createClub() {
    return;
  }

  @ApiOperation({ summary: '동아리 모두 조회' })
  @Get()
  getAllClubs() {
    return;
  }

  @ApiOperation({ summary: '동아리 상세 조회' })
  @Get(':clubId')
  getClubById() {
    return;
  }

  @ApiOperation({ summary: '동아리 수정' })
  @Put(':clubId')
  updateClubById() {
    return;
  }

  @ApiOperation({ summary: '동아리 삭제' })
  @Delete(':clubId')
  removeClubById() {
    return;
  }
}

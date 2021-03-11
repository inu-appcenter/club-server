import { SWAGGER_TAG_CLUB } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Post, Put, Query, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClubDTO } from '../dto/create.club.dto';
import { UpdateClubDTO } from '../dto/update.club.dto';

@ApiTags(SWAGGER_TAG_CLUB.tag)
@Controller('clubs')
export class ClubController {
  @ApiOperation({ summary: '동아리 생성' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateClubDTO })
  @Post()
  createClub(@Body(ValidationPipe) createClubDto: CreateClubDTO) {
    return;
  }

  @ApiOperation({ summary: '동아리 모두 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get()
  getAllClubs() {
    return;
  }

  @ApiOperation({ summary: '동아리 상세 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get(':clubId')
  getClubById() {
    return;
  }

  @ApiOperation({ summary: '동아리 수정' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: UpdateClubDTO })
  @Put(':clubId')
  updateClubById(@Body(ValidationPipe) createClubDto: UpdateClubDTO) {
    return;
  }

  @ApiOperation({ summary: '동아리 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':clubId')
  removeClubById() {
    return;
  }
}

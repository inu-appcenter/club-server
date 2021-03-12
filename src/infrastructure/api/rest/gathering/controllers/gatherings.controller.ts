import { SWAGGER_TAG_GATHERING } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGatheringDTO } from '../models/dto/create-gathering.dto';
import { UpdateGatheringDTO } from '../models/dto/update-gathering.dto';
import { AllGatheringsRes } from '../models/res/all-gathering.res';
import { GatheringRes } from '../models/res/gathering.res';

@ApiTags(SWAGGER_TAG_GATHERING.tag)
@Controller('gatherings')
export class GatheringController {
  @ApiOperation({ summary: '소모임 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateGatheringDTO })
  @Post()
  async createGathering(@Body() createGatheringDto: CreateGatheringDTO) {
    return;
  }

  // todo: 정렬 -> 최신순, 마감 임박순
  // todo: 카테고리 -> 다중 선택
  @ApiOperation({ summary: '모집 중인 소모임 조회' })
  @ApiOkResponse({ description: '성공', type: AllGatheringsRes })
  @Get()
  async getGatherings(): Promise<AllGatheringsRes> {
    return;
  }

  @ApiOperation({ summary: '소모임 상세 조회' })
  @ApiOkResponse({ description: '성공', type: GatheringRes })
  @Get(':gatheringId')
  async getGatheringById(@Param('gatheringId') gatheringId: number): Promise<GatheringRes> {
    return;
  }

  @ApiOperation({ summary: '소모임 수정' })
  @ApiOkResponse({ description: '성공' })
  @ApiBody({ type: UpdateGatheringDTO })
  @Put(':gatheringId')
  async updateGatheringById(@Param('gatheringId') gatheringId: number, @Body() updateGatheringDto: UpdateGatheringDTO) {
    return;
  }

  @ApiOperation({ summary: '소모임 강제 마감' })
  @ApiOkResponse({ description: '성공' })
  @Patch(':gatheringId')
  async closeGatheringById(@Param('gatheringId') gatheringId: number) {
    return;
  }

  @ApiOperation({ summary: '소모임 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':gatheringId')
  async removeGatheringById(@Param('gatheringId') gatheringId: number) {
    return;
  }

  @ApiOperation({ summary: '소모임 신고' })
  @ApiOkResponse({ description: '성공' })
  @Post(':gatheringId/report')
  async reportGathering() {
    return;
  }
}

import { SWAGGER_TAG_GATHERING } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGatheringDTO } from '../dto/create.gathering.dto';
import { UpdateGatheringDTO } from '../dto/update.gathering.dto';

@ApiTags(SWAGGER_TAG_GATHERING.tag)
@Controller('gatherings')
export class GatheringController {
  @ApiOperation({ summary: '소모임 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateGatheringDTO })
  @Post()
  createGathering(@Body(ValidationPipe) createGatheringDto: CreateGatheringDTO) {
    return;
  }

  // todo: 정렬 -> 최신순, 마감 임박순
  // todo: 카테고리 -> 다중 선택
  @ApiOperation({ summary: '모집 중인 소모임 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get()
  getGatherings() {
    return;
  }

  @ApiOperation({ summary: '소모임 상세 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get(':gatheringId')
  getGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 수정' })
  @ApiOkResponse({ description: '성공' })
  @ApiBody({ type: UpdateGatheringDTO })
  @Put(':gatheringId')
  updateGatheringById(@Body(ValidationPipe) updateGatheringDto: UpdateGatheringDTO) {
    return;
  }

  @ApiOperation({ summary: '소모임 강제 마감' })
  @ApiOkResponse({ description: '성공' })
  @Patch(':gatheringId')
  closeGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':gatheringId')
  removeGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 신고' })
  @ApiOkResponse({ description: '성공' })
  @Post(':gatheringId/report')
  reportGathering() {
    return;
  }
}

import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Gathering')
@Controller('gatherings')
export class GatheringsController {
  @ApiOperation({ summary: '소모임 등록' })
  @Post()
  createGathering() {
    return;
  }

  // todo: 정렬 -> 최신순, 마감 임박순
  // todo: 카테고리 -> 다중 선택
  @ApiOperation({ summary: '모집 중인 소모임 조회' })
  @Get()
  getGatherings() {
    return;
  }

  @ApiOperation({ summary: '소모임 상세 조회' })
  @Get(':gatheringId')
  getGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 수정' })
  @Put(':gatheringId')
  updateGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 강제 마감' })
  @Patch(':gatheringId')
  closeGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 삭제' })
  @Delete(':gatheringId')
  removeGatheringById() {
    return;
  }

  @ApiOperation({ summary: '소모임 신고' })
  @Post(':gatheringId/report')
  reportGathering() {
    return;
  }
}

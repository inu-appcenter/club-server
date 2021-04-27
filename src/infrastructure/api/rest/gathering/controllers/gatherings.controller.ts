import { SWAGGER_TAG_GATHERING } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateGatheringDTO } from '../models/dto/create-gathering.dto';
import { UpdateGatheringDTO } from '../models/dto/update-gathering.dto';
import { GatheringRes } from '../models/res/gathering.res';
import { GatheringsService } from '../services/gatherings.service';

@ApiTags(SWAGGER_TAG_GATHERING.tag)
@ApiInternalServerErrorResponse({ description: '에러 메세지를 알려주세요!' })
@ApiUnauthorizedResponse({ description: '권한 없음' })
@Controller('gatherings')
export class GatheringController {
  constructor(private readonly gatheringService: GatheringsService) {}

  // todo: 인증
  @ApiOperation({ summary: '소모임 등록' })
  @ApiCreatedResponse({ description: '성공', type: GatheringRes })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @ApiBody({ type: CreateGatheringDTO })
  @Post()
  async createGathering(@Body() createGatheringDto: CreateGatheringDTO) {
    const userId = 1;
    return await this.gatheringService.createGathering(createGatheringDto, userId);
  }

  @ApiOperation({ summary: '모집 중인 소모임 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: GatheringRes })
  @Get()
  async getGatherings(): Promise<GatheringRes[]> {
    return await this.gatheringService.geGatheringList();
  }

  @ApiOperation({ summary: '특정 사용자가 작성한 소모임들 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: GatheringRes })
  @Get('users/:userId')
  async getPostedGatherings(@Param('userId') userId: number): Promise<GatheringRes[]> {
    return await this.gatheringService.getPostedGatheringList(userId);
  }

  // todo: 인증
  @ApiOperation({ summary: '참여한 소모임들 조회(자신이 생성한 소모임까지)' })
  @ApiOkResponse({ description: '성공', isArray: true, type: GatheringRes })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @Get('participation')
  async GetAllMyGatherings(): Promise<GatheringRes[]> {
    const userId = 1;
    return await this.gatheringService.getMyGatheringList(userId);
  }

  @ApiOperation({ summary: '소모임 상세 조회' })
  @ApiOkResponse({ description: '성공', type: GatheringRes })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @Get(':gatheringId')
  async getGatheringById(@Param('gatheringId') gatheringId: number): Promise<GatheringRes> {
    return await this.gatheringService.getGatheringById(gatheringId);
  }

  // todo: 인증
  @ApiOperation({ summary: '소모임 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiBody({ type: UpdateGatheringDTO })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @Put(':gatheringId')
  async updateGatheringById(@Param('gatheringId') gatheringId: number, @Body() updateGatheringDto: UpdateGatheringDTO) {
    const userId = 1;
    await this.gatheringService.updateGathering(updateGatheringDto, gatheringId, userId);
  }

  // todo: 인증
  @ApiOperation({ summary: '소모임 강제 마감' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @Patch(':gatheringId')
  async closeGatheringById(@Param('gatheringId') gatheringId: number) {
    const userId = 1;
    await this.gatheringService.closeGatheringById(gatheringId, userId);
  }

  // todo: 인증
  @ApiOperation({ summary: '소모임 삭제' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @Delete(':gatheringId')
  async removeGatheringById(@Param('gatheringId') gatheringId: number) {
    const userId = 1;
    await this.gatheringService.removeGatheringById(gatheringId, userId);
  }

  @ApiOperation({ summary: '소모임 신고' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @Post(':gatheringId/report')
  async reportGathering(@Param('gatheringId') gatheringId: number) {
    await this.gatheringService.reportGatheringById(gatheringId);
  }
}

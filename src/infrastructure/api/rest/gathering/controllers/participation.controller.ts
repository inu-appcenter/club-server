import { SWAGGER_TAG_GATHERING_PARTICIPATION } from '@/common/swagger/SwaggerTags';
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ParticipationService } from '../services/participation.service';

// todo: 인증
@ApiTags(SWAGGER_TAG_GATHERING_PARTICIPATION.tag)
@ApiInternalServerErrorResponse({ description: '에러 메세지를 알려주세요!' })
@ApiUnauthorizedResponse({ description: '권한 없음' })
@Controller('/gatherings/:gatheringId/participation')
export class GatheringParticipationController {
  constructor(private readonly participationService: ParticipationService) {}

  @ApiOperation({ summary: '소모임 참여' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @ApiNotFoundResponse({ description: '데이터가 없음' })
  @Post()
  async participateInGathering(@Param('gatheringId') gatheringId: number) {
    const userId = 3;
    await this.participationService.participateInGathering(gatheringId, userId);
  }

  @ApiOperation({ summary: '소모임 탈주' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete()
  async escapeGathering(@Param('gatheringId') gatheringId: number) {
    const userId = 3;
    await this.participationService.quitGatheringById(gatheringId, userId);
  }
}

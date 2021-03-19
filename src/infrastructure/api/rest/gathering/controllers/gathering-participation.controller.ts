import { SWAGGER_TAG_GATHERING_PARTICIPATION } from '@/common/swagger/SwaggerTags';
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllGatheringsRes } from '../models/res/all-gathering.res';
import { GatheringRes } from '../models/res/gathering.res';

@ApiTags(SWAGGER_TAG_GATHERING_PARTICIPATION.tag)
@Controller('/gatherings/:gatheringId/participation')
export class GatheringParticipationController {
  @ApiOperation({ summary: '소모임 참여' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @Post()
  async participantGathering(@Param('gatheringId') gatheringId: number) {
    return;
  }

  @ApiOperation({ summary: '소모임 탈주' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete()
  async escapeGathering(@Param('gatheringId') gatheringId: number) {
    return;
  }
}

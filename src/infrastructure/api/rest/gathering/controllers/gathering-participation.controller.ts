import { SWAGGER_TAG_GATHERING_PARTICIPATION } from '@/common/swagger/SwaggerTags';
import { Controller, Delete, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_GATHERING_PARTICIPATION.tag)
@Controller('/gatherings/:gatheringId/participation')
export class GatheringParticipationController {
  @ApiOperation({ summary: '소모임 참여' })
  @ApiCreatedResponse({ description: '성공' })
  @Post()
  participantGathering() {
    return;
  }

  @ApiOperation({ summary: '소모임 탈주' })
  @ApiOkResponse({ description: '성공' })
  @Delete()
  escapeGathering() {
    return;
  }
}

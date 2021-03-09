import { SWAGGER_TAG_GATHERING_PARTICIPATION } from '@/common/swagger/SwaggerTagS';
import { Controller, Delete, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_GATHERING_PARTICIPATION.tag)
@Controller('/gatherings/:gatheringId/participation')
export class GatheringParticipationController {
  @ApiOperation({ summary: '소모임 참여' })
  @Post()
  participantGathering() {
    return;
  }

  @ApiOperation({ summary: '소모임 탈주' })
  @Delete()
  escapeGathering() {
    return;
  }
}

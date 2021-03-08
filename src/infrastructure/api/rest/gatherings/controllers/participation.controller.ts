import { Controller, Delete, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Participation')
@Controller('/gatherings/:gatheringId/participation')
export class ParticipationController {
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

import { Module } from '@nestjs/common';
import { GatheringCommentController } from './controllers/comments.controller';
import { GatheringController } from './controllers/gatherings.controller';
import { GatheringReCommentController } from './controllers/re-comments.controller';
import { GatheringService } from './services/gatherings.service';
import { GatheringParticipationController } from './controllers/participation.controller';

@Module({
  controllers: [
    GatheringController,
    GatheringCommentController,
    GatheringReCommentController,
    GatheringParticipationController,
  ],
  providers: [GatheringService],
})
export class GatheringModule {}

import { Module } from '@nestjs/common';
import { GatheringCommentController } from './controllers/gathering-comments.controller';
import { GatheringController } from './controllers/gatherings.controller';
import { GatheringReCommentController } from './controllers/gathering-re-comments.controller';
import { GatheringService } from './services/gatherings.service';
import { GatheringParticipationController } from './controllers/gathering-participation.controller';

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

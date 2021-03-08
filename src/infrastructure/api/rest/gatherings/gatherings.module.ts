import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { GatheringsController } from './controllers/gatherings.controller';
import { ReCommentsController } from './controllers/re-comments.controller';
import { GatheringsService } from './services/gatherings.service';
import { ParticipationController } from './controllers/participation.controller';

@Module({
  controllers: [GatheringsController, CommentsController, ReCommentsController, ParticipationController],
  providers: [GatheringsService],
})
export class GatheringsModule {}

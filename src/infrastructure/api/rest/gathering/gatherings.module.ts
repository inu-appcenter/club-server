import { Module } from '@nestjs/common';
import { GatheringCommentController } from './controllers/comment.controller';
import { GatheringController } from './controllers/gatherings.controller';
import { GatheringsService } from './services/gatherings.service';
import { GatheringParticipationController } from './controllers/participation.controller';
import { GatheringServiceModule } from '@/infrastructure/di/injections/gathering.services.module';

@Module({
  imports: [GatheringServiceModule.register()],
  controllers: [GatheringController, GatheringCommentController, GatheringParticipationController],
  providers: [GatheringsService],
})
export class GatheringModule {}

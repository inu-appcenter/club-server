import { Module } from '@nestjs/common';
import { GatheringCommentController } from './controllers/comment.controller';
import { GatheringController } from './controllers/gatherings.controller';
import { GatheringsService } from './services/gatherings.service';
import { GatheringParticipationController } from './controllers/participation.controller';
import { GatheringServiceModule } from '@/infrastructure/di/injections/gathering.services.module';
import { ParticipationService } from './services/participation.service';

@Module({
  imports: [GatheringServiceModule.register()],
  controllers: [GatheringController, GatheringCommentController, GatheringParticipationController],
  providers: [GatheringsService, ParticipationService],
})
export class GatheringModule {}

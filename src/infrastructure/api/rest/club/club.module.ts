import { ClubServiceModule } from '@/infrastructure/di/injections/club.services.module';
import { Module } from '@nestjs/common';
import { ClubRecommendationController } from './controllers/club-recommendation.controller';
import { ClubSearchController } from './controllers/club-search.controller';
import { ClubController } from './controllers/club.controller';
import { ClubSearchService } from './services/club-search.service';
import { ClubService } from './services/club.service';

@Module({
  imports: [ClubServiceModule.register()],
  controllers: [ClubController, ClubRecommendationController, ClubSearchController],
  providers: [ClubService, ClubSearchService],
})
export class ClubModule {}

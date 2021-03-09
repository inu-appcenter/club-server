import { Module } from '@nestjs/common';
import { ClubRecommendationController } from './controllers/club-recommendation.controller';
import { ClubSearchController } from './controllers/club-search.controller';
import { ClubController } from './controllers/club.controller';
import { ClubService } from './services/club.service';

@Module({
  controllers: [ClubController, ClubRecommendationController, ClubSearchController],
  providers: [ClubService],
})
export class ClubModule {}

import { Module } from '@nestjs/common';
import { ClubTodayService } from './services/clubtoday.service';
import { ClubClubTodayController } from './controllers/club-clubtoday.controller';
import { ClubTodayController } from './controllers/clubtoday.controller';

@Module({
  imports: [],
  providers: [ClubTodayService],
  controllers: [ClubClubTodayController, ClubTodayController],
})
export class ClubTodayModule {}

import { Module } from '@nestjs/common';
import { ClubTodayService } from './services/clubtoday.service';
import { ClubClubTodayController } from './controllers/club-clubtoday.controller';
import { ClubTodayController } from './controllers/clubtoday.controller';
import { ClubTodayServiceModule } from '@/infrastructure/di/injections/clubtoday.services.module';
import { ClubTodayByClubService } from './services/club-clubtoday.service';

@Module({
  imports: [ClubTodayServiceModule.register()],
  providers: [ClubTodayService, ClubTodayByClubService],
  controllers: [ClubClubTodayController, ClubTodayController],
})
export class ClubTodayModule {}

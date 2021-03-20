import { Module } from '@nestjs/common';
import { ClubTodayService } from './services/clubtoday.service';
import { ClubClubTodayController } from './controllers/club-clubtoday.controller';
import { ClubTodayServiceModule } from '@/infrastructure/di/injections/clubtoday.services.module';
import { ClubTodayController } from './controllers/clubtoday.controller';

@Module({
  imports: [ClubTodayServiceModule.register()],
  providers: [ClubTodayService],
  controllers: [ClubClubTodayController, ClubTodayController],
})
export class ClubTodayModule {}

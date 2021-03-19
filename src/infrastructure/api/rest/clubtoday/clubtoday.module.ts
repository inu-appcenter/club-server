import { Module } from '@nestjs/common';
import { ClubTodayService } from './services/clubtoday.service';
import { ClubTodayController } from './controllers/clubtoday.controller';
import { ClubTodayServiceModule } from '@/infrastructure/di/injections/clubtoday.services.module';

@Module({
  imports: [ClubTodayServiceModule.register()],
  providers: [ClubTodayService],
  controllers: [ClubTodayController],
})
export class ClubTodayModule {}

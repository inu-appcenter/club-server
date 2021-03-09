import { Module } from '@nestjs/common';
import { ClubTodayService } from './services/clubtoday.service';
import { ClubTodayController } from './controllers/clubtoday.controller';

@Module({
  providers: [ClubTodayService],
  controllers: [ClubTodayController],
})
export class ClubtodayModule {}

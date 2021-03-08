import { Module } from '@nestjs/common';
import { ClubTodayService } from './clubtoday.service';
import { ClubTodayController } from './clubtoday.controller';

@Module({
  providers: [ClubTodayService],
  controllers: [ClubTodayController],
})
export class ClubtodayModule {}

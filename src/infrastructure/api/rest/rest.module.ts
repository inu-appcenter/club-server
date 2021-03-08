import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ClubtodayModule } from './clubtoday/clubtoday.module';
import { ClubsModule } from './clubs/clubs.module';
import { GatheringsModule } from './gatherings/gatherings.module';

@Module({
  imports: [UserModule, AuthModule, ClubtodayModule, ClubsModule, GatheringsModule],
})
export class RestModule {}

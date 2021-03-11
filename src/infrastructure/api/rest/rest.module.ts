import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ClubtodayModule } from './clubtoday/clubtoday.module';
import { ClubModule } from './club/club.module';
import { GatheringModule } from './gathering/gatherings.module';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './superadmin/superadmin.module';
import { UploadTestModule } from './upload-test/upload-test.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ClubtodayModule,
    ClubModule,
    GatheringModule,
    AdminModule,
    SuperAdminModule,
    UploadTestModule,
  ],
})
export class RestModule {}

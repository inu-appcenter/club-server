import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ClubTodayModule } from './clubtoday/clubtoday.module';
import { ClubModule } from './club/club.module';
import { GatheringModule } from './gathering/gatherings.module';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './superadmin/superadmin.module';
import { UploadTestModule } from './upload/upload.module';
import { CategoryModule } from './category/category.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '../exception-filter/nest-http-exception.filter';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ClubTodayModule,
    ClubModule,
    GatheringModule,
    AdminModule,
    SuperAdminModule,
    UploadTestModule,
    CategoryModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class RestModule {}

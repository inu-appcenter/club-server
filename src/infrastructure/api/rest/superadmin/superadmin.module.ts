import { Module } from '@nestjs/common';
import { SuperAdminController } from './controllers/superadmin.controller';
import { SuperAdminService } from './services/superadmin.service';

@Module({
  controllers: [SuperAdminController],
  providers: [SuperAdminService],
})
export class SuperAdminModule {}

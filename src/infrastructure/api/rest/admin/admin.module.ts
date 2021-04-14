import { AdminServiceModule } from '@/infrastructure/di/injections/admin.services.module';
import { Module } from '@nestjs/common';
import { AdminController } from './controllers/admin.controller';
import { AdminService } from './services/admin.service';

@Module({
  imports: [AdminServiceModule.register()],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

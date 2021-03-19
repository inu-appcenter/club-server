import { EnvironmentConfigService } from '@/infrastructure/config/environment/env.service';
import { MulterConfigModule } from '@/infrastructure/config/multer/multer.module';
import { Module } from '@nestjs/common';
import { UploadController } from './controllers/upload.controller';
import { UploadService } from './services/upload.service';

@Module({
  imports: [MulterConfigModule],
  controllers: [UploadController],
  providers: [UploadService, EnvironmentConfigService],
})
export class UploadTestModule {}

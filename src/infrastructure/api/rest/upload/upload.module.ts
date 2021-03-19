import { MulterConfigModule } from '@/infrastructure/config/multer/multer.module';
import { Module } from '@nestjs/common';
import { UploadTestController } from './upload.controller';

@Module({
  imports: [MulterConfigModule],
  controllers: [UploadTestController],
})
export class UploadTestModule {}

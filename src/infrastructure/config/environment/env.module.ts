import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './env.service';

@Module({
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}

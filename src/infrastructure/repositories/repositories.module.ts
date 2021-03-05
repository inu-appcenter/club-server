import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment/env.module';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';

@Module({
  imports: [TypeormConfigModule],
})
export class RepositoriesModule {}

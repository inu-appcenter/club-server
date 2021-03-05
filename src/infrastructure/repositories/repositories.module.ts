import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../config/environment/env.module';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeormConfigModule, TypeOrmModule.forFeature([]), EnvironmentConfigModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoriesModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RestModule } from './api/rest/rest.module';
import { EnvironmentConfigModule } from './config/environment/env.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), // .env 설정
    EnvironmentConfigModule, // 환경 변수 설정
    RepositoriesModule, // orm 설정
    RestModule, // api
  ],
})
export class AppModule {}

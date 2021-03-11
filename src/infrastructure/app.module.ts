import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './api/middlewares/logger.middleware';
import { RestModule } from './api/rest/rest.module';
import { EnvironmentConfigModule } from './config/environment/env.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), // .env 설정
    EnvironmentConfigModule, // 환경 변수 설정
    RestModule, // api
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

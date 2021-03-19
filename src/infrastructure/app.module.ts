import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LoggerMiddleware } from './api/middlewares/logger.middleware';
import { RestModule } from './api/rest/rest.module';
import { EnvironmentConfigModule } from './config/environment/env.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), // .env 설정
    EnvironmentConfigModule, // 환경 변수 설정
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads'),
    }), // 정적 컨텐츠 제공
    RestModule, // api
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './infrastructure/app.module';
import { createDocument } from './common/swagger/Swagger';
import { EnvironmentConfigService } from './infrastructure/config/environment/env.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  const port: string = app.get(EnvironmentConfigService).get('PORT');

  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(port);
}
bootstrap();

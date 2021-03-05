import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './infrastructure/app.module';
import { createDocument } from './common/swagger/Swagger';
import { EnvironmentConfigService } from './infrastructure/config/environment/env.service';

async function root() {
  const app = await NestFactory.create(AppModule);
  const port: string = app.get(EnvironmentConfigService).get('PORT');

  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(port);
}
root();

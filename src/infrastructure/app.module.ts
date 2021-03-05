import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RestModule } from './api/rest/rest.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), RestModule],
})
export class AppModule {}

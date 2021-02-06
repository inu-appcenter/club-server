import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), EnvironmentConfigModule],
})
export class AppModule {}

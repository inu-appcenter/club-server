import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './api/user/user.module';
import { EnvironmentConfigModule } from './config/config.module';
import { TypeormConfigModule } from './database/typeorm/typeorm.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    EnvironmentConfigModule,
    TypeormConfigModule,
    UserModule,
  ],
})
export class AppModule {}

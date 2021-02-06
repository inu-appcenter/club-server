import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../../config/config.service';
import { EnvironmentConfigModule } from '../../config/config.module';
import { User } from 'src/domain/entity/user.entity';
import { Admin } from 'src/domain/entity/admin.entity';

export const getTypeOrmModuleOptions = (environmentConfigService: EnvironmentConfigService): TypeOrmModuleOptions =>
  ({
    type: environmentConfigService.get('DB_TYPE'),
    host: environmentConfigService.get('DB_HOST'),
    port: parseInt(environmentConfigService.get('DB_PORT'), 10),
    username: environmentConfigService.get('DB_USERNAME'),
    password: environmentConfigService.get('DB_PASSWORD'),
    database: environmentConfigService.get('DB_NAME'),
    entities: [User, Admin],
    synchronize: true,
  } as TypeOrmModuleOptions);

export const getTypeOrmMigrationsOptions = (environmentConfigService: EnvironmentConfigService) => ({
  ...getTypeOrmModuleOptions(environmentConfigService),
  entities: ['dist/**/entities/*.entity{.ts,.js}'],
  migrationsTableName: 'typeorm_migrations',
  migrations: ['**/migrations/*migration*.ts'],
  name: 'schema',
});

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeormConfigModule {}

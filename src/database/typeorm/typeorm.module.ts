import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../../config/config.service';
import { EnvironmentConfigModule } from '../../config/config.module';

export const getTypeOrmModuleOptions = (environmentConfigService: EnvironmentConfigService): TypeOrmModuleOptions =>
  ({
    type: environmentConfigService.get('DB_TYPE'),
    host: environmentConfigService.get('DB_HOST'),
    port: parseInt(environmentConfigService.get('DB_PORT'), 10),
    username: environmentConfigService.get('DB_USERNAME'),
    password: environmentConfigService.get('DB_PASSWORD'),
    // database: environmentConfigService.get('DB_NAME'),
    // entities: [],
    // ssl: true,
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
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'mysql',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
})
export class TypeormModule {}

import { OrmAdmin } from '@/infrastructure/repositories/entities/admin.entity';
import { OrmApplicationInfo } from '@/infrastructure/repositories/entities/application-info.entity';
import { OrmCategory } from '@/infrastructure/repositories/entities/category.entity';
import { OrmClub } from '@/infrastructure/repositories/entities/club.entity';
import { OrmClubImage } from '@/infrastructure/repositories/entities/club-image.entity';
import { OrmClubToday } from '@/infrastructure/repositories/entities/clubtoday.entity';
import { OrmComment } from '@/infrastructure/repositories/entities/comment.entity';
import { OrmGathering } from '@/infrastructure/repositories/entities/gathering.entity';
import { OrmSuperAdmin } from '@/infrastructure/repositories/entities/superadmin.entity';
import { OrmUser } from '@/infrastructure/repositories/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment/env.module';
import { EnvironmentConfigService } from '../environment/env.service';
import { OrmReportComment } from '@/infrastructure/repositories/entities/report-comment.entity';
import { OrmReportGathering } from '@/infrastructure/repositories/entities/report-gathering.entity';
import { OrmKeyword } from '@/infrastructure/repositories/entities/keyword.entity';

export const getTypeOrmModuleOptions = (environmentConfigService: EnvironmentConfigService): TypeOrmModuleOptions =>
  ({
    type: environmentConfigService.get('DB_TYPE'),
    host: environmentConfigService.get('DB_HOST'),
    port: parseInt(environmentConfigService.get('DB_PORT'), 10),
    username: environmentConfigService.get('DB_USERNAME'),
    password: environmentConfigService.get('DB_PASSWORD'),
    database: environmentConfigService.get('DB_NAME'),
    entities: [
      OrmAdmin,
      OrmUser,
      OrmGathering,
      OrmApplicationInfo,
      OrmCategory,
      OrmClub,
      OrmClubImage,
      OrmClubToday,
      OrmComment,
      OrmSuperAdmin,
      OrmReportComment,
      OrmReportGathering,
      OrmKeyword,
    ],
    logging: false,
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

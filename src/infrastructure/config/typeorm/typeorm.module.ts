import { OrmAdmin } from '@/infrastructure/repositories/entities/admin.entity';
import { OrmApplicationInfo } from '@/infrastructure/repositories/entities/application_info.entity';
import { OrmCategory } from '@/infrastructure/repositories/entities/category.entity';
import { OrmClub } from '@/infrastructure/repositories/entities/club.entity';
import { OrmClubImage } from '@/infrastructure/repositories/entities/club_image.entity';
import { OrmClubToday } from '@/infrastructure/repositories/entities/club_today.entity';
import { OrmClubTodayImage } from '@/infrastructure/repositories/entities/club_today_image.entity';
import { OrmComment } from '@/infrastructure/repositories/entities/comment.entity';
import { OrmGathering } from '@/infrastructure/repositories/entities/gathering.entity';
import { OrmReComment } from '@/infrastructure/repositories/entities/re_comment.entity';
import { OrmSuperAdmin } from '@/infrastructure/repositories/entities/super_admin.entity';
import { OrmUser } from '@/infrastructure/repositories/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment/env.module';
import { EnvironmentConfigService } from '../environment/env.service';

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
      OrmClubTodayImage,
      OrmComment,
      OrmReComment,
      OrmSuperAdmin,
    ],
    synchronize: false,
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

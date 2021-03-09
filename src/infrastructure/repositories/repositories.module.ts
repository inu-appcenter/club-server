import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { OrmCategory } from './entities/category.entity';
import { OrmClub } from './entities/club.entity';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClubToday } from './entities/club-today.entity';
import { OrmClubTodayImage } from './entities/club-today-image.entity';
import { OrmComment } from './entities/comment.entity';
import { OrmGathering } from './entities/gathering.entity';
import { OrmReComment } from './entities/recomment.entity';
import { OrmSuperAdmin } from './entities/superadmin.entity';
import { OrmUser } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeormConfigModule,
    TypeOrmModule.forFeature([
      OrmUser,
      OrmAdmin,
      OrmApplicationInfo,
      OrmCategory,
      OrmClub,
      OrmClubImage,
      OrmClubToday,
      OrmClubTodayImage,
      OrmComment,
      OrmGathering,
      OrmReComment,
      OrmSuperAdmin,
    ]),
  ],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoriesModule {}

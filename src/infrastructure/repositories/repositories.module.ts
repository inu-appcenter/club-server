import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { OrmCategory } from './entities/category.entity';
import { OrmClub } from './entities/club.entity';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClubToday } from './entities/clubtoday.entity';
import { OrmComment } from './entities/comment.entity';
import { OrmGathering } from './entities/gathering.entity';
import { OrmSuperAdmin } from './entities/superadmin.entity';
import { OrmUser } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { OrmReportComment } from './entities/report-comment.entity';
import { OrmReportGathering } from './entities/report-gathering.entity';
import { OrmKeyword } from './entities/keyword.entity';
import { AdminRepository } from './admin.repository';
import { ClubRepository } from './club.repository';
import { KeywordRepository } from './keyword.repository';
import { CategoryRepository } from './category.repository';

// todo: 레포지토리 구현체 exports and providers
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
      OrmComment,
      OrmGathering,
      OrmSuperAdmin,
      OrmReportComment,
      OrmReportGathering,
      OrmKeyword,
    ]),
  ],
  providers: [UserRepository, AdminRepository, ClubRepository, KeywordRepository, CategoryRepository],
  exports: [UserRepository, AdminRepository, ClubRepository, KeywordRepository, CategoryRepository],
})
export class RepositoriesModule {}

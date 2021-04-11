import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigModule } from '../config/typeorm/typeorm.module';
import { OrmAdmin } from './entities/admin.entity';
import { OrmApplicationInfo } from './entities/application-info.entity';
import { OrmCategory } from './entities/category.entity';
import { OrmClub } from './entities/club.entity';
import { OrmClubImage } from './entities/club-image.entity';
import { OrmClubToday } from './entities/clubtoday.entity';
import { OrmClubTodayImage } from './entities/clubtoday-image.entity';
import { OrmComment } from './entities/comment.entity';
import { OrmGathering } from './entities/gathering.entity';
import { OrmReComment } from './entities/re-comment.entity';
import { OrmSuperAdmin } from './entities/superadmin.entity';
import { OrmUser } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { OrmDemand } from './entities/demand.entity';
import { OrmReportComment } from './entities/report-comment.entity';
import { OrmReportGathering } from './entities/report-gathering.entity';
import { OrmReportReComment } from './entities/report-recomment.entity';
import { ClubTodayRepository } from './clubtoday.repository';
import { ClubRepository } from './club.repository';
import { AdminRepository } from './admin.repository';

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
      OrmDemand,
      OrmReportComment,
      OrmReportGathering,
      OrmReportReComment,
    ]),
  ],
  providers: [UserRepository, ClubRepository, AdminRepository, ClubTodayRepository],
  exports: [UserRepository, ClubRepository, AdminRepository, ClubTodayRepository],
})
export class RepositoriesModule {}

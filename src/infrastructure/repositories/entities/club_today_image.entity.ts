import { Column, Entity as OrmEntity, ManyToOne } from 'typeorm';
import { OrmClubToday } from './club_today.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubTodayImage extends CommonTypeOrm {
  @Column()
  url!: string;

  @ManyToOne((type) => OrmClubToday, (club) => club.images)
  clubToday: OrmClubToday;
}

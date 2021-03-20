import { Column, Entity as OrmEntity, OneToOne } from 'typeorm';
import { OrmClubToday } from './clubtoday.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubTodayHeaderImage extends CommonTypeOrm {
  @Column()
  url!: string;

  @OneToOne((type) => OrmClubToday, (club) => club.headerImage, { onDelete: 'CASCADE' })
  clubToday: OrmClubToday;
}

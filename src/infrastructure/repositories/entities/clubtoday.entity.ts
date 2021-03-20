import { Column, Entity as OrmEntity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { OrmAdmin } from './admin.entity';
import { OrmClubTodayHeaderImage } from './clubtoday-header-image.entity';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubToday extends CommonTypeOrm {
  @Column()
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @OneToOne((type) => OrmClubTodayHeaderImage, (clubTodayImage) => clubTodayImage.clubToday, { cascade: true })
  @JoinColumn()
  headerImage: OrmClubTodayHeaderImage;

  @ManyToOne((type) => OrmAdmin, (admin) => admin.clubTodays)
  admin: OrmAdmin;

  @ManyToOne((type) => OrmClub, (club) => club.clubTodays, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  club: OrmClub;
}

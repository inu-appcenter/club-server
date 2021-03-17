import { Column, Entity as OrmEntity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { OrmAdmin } from './admin.entity';
import { OrmClubTodayImage } from './club-today-image.entity';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubToday extends CommonTypeOrm {
  @Column()
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @OneToOne((type) => OrmClubTodayImage, { cascade: true })
  @JoinColumn()
  headImage: OrmClubTodayImage;

  @OneToMany((type) => OrmClubTodayImage, (clubTodayImage) => clubTodayImage.clubToday, { cascade: true })
  images: OrmClubTodayImage[];

  @ManyToOne((type) => OrmAdmin, (admin) => admin.clubTodays)
  admin: OrmAdmin;

  @ManyToOne((type) => OrmClub, (club) => club.clubTodays, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  club: OrmClub;
}

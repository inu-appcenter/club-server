import { Column, Entity as OrmEntity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { OrmClubTodayImage } from './clubtoday-image.entity';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubToday extends CommonTypeOrm {
  @Column()
  title!: string;

  @Column()
  body!: string;

  @OneToOne(() => OrmClubTodayImage, { cascade: true })
  @JoinColumn()
  headerImage: OrmClubTodayImage;

  @ManyToOne(() => OrmClub, (club) => club.clubTodays, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  club: OrmClub;
}

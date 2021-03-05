import { Column, Entity as OrmEntity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrmAdmin } from './admin.entity';
import { OrmClubTodayImage } from './club_today_image.entity';
import { CommonTypeOrm } from './common/common';

/**
 * todo: 이미지
 */
@OrmEntity('clubToday')
export class OrmClubToday extends CommonTypeOrm {
  @Column()
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @OneToMany((type) => OrmClubTodayImage, (clubTodayImage) => clubTodayImage.clubToday)
  images: OrmClubTodayImage;

  @ManyToOne((type) => OrmAdmin, (admin) => admin.clubTodays)
  admin: OrmAdmin;
}

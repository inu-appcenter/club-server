import { Column, Entity as OrmEntity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { OrmAdmin } from './admin.entity';
import { OrmApplicationInfo } from './application-info.entity';
import { OrmCategory } from './category.entity';
import { CommonTypeOrm } from './common/common';
import { OrmClubImage } from './club-image.entity';
import { OrmClubToday } from './club-today.entity';

@OrmEntity()
export class OrmClub extends CommonTypeOrm {
  @Column()
  clubName!: string;

  @Column()
  location!: string;

  @Column({ type: 'text' })
  summary!: string;

  @Column({ nullable: true })
  keywords: string;

  @OneToOne((type) => OrmAdmin, (admin) => admin.club, { nullable: true })
  @JoinColumn()
  admin: OrmAdmin;

  @OneToOne((type) => OrmApplicationInfo, { cascade: true })
  @JoinColumn()
  applicationInfo: OrmApplicationInfo;

  @ManyToOne((type) => OrmCategory, (category) => category.clubs)
  category: OrmCategory;

  @OneToMany((type) => OrmClubImage, (image) => image.club, { cascade: true })
  images: OrmClubImage[];

  @OneToMany((type) => OrmClubToday, (clubToday) => clubToday.club, { cascade: true })
  clubTodays: OrmClubToday[];
}

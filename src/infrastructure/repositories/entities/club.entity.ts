import { Column, Entity as OrmEntity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { OrmAdmin } from './admin.entity';
import { OrmApplicationInfo } from './application-info.entity';
import { OrmCategory } from './category.entity';
import { CommonTypeOrm } from './common/common';
import { OrmClubImage } from './club-image.entity';

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

  @OneToOne((type) => OrmApplicationInfo)
  @JoinColumn()
  applicationInfo: OrmApplicationInfo;

  @ManyToOne((type) => OrmCategory, (category) => category.clubs)
  category: OrmCategory;

  @OneToMany((type) => OrmClubImage, (image) => image.club)
  images: OrmClubImage[];
}

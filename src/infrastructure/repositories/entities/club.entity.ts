import { Column, Entity as OrmEntity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { OrmAdmin } from './admin.entity';
import { OrmApplicationInfo } from './application-info.entity';
import { OrmCategory } from './category.entity';
import { CommonTypeOrm } from './common/common';
import { OrmClubToday } from './clubtoday.entity';
import { OrmClubImage } from './club-image.entity';

@OrmEntity()
export class OrmClub extends CommonTypeOrm {
  @Column()
  clubName!: string;

  @Column()
  location!: string;

  @Column({ type: 'text' })
  summary!: string;

  @OneToOne(() => OrmAdmin, (admin) => admin.club, { nullable: true })
  @JoinColumn()
  admin: OrmAdmin;

  @OneToOne(() => OrmApplicationInfo, { cascade: true })
  @JoinColumn()
  applicationInfo: OrmApplicationInfo;

  @ManyToOne(() => OrmCategory, (category) => category.clubs)
  category: OrmCategory;

  @OneToMany(() => OrmClubImage, (image) => image.club, { cascade: true })
  clubImages: OrmClubImage[];

  @OneToMany(() => OrmClubToday, (clubToday) => clubToday.club, { cascade: true })
  clubTodays: OrmClubToday[];
}

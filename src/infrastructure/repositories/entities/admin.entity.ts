import { Column, Entity as OrmEntity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { OrmClub } from './club.entity';
import { OrmClubToday } from './clubtoday.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmAdmin extends CommonTypeOrm {
  @Column()
  studentId!: number;

  @Column()
  name!: string;

  @Column()
  phonNumber!: string;

  @OneToOne((type) => OrmClub, (club) => club.admin, { nullable: true })
  @JoinColumn()
  club: OrmClub;

  @OneToMany((type) => OrmClubToday, (clubToday) => clubToday.admin)
  clubTodays: OrmClubToday[];
}

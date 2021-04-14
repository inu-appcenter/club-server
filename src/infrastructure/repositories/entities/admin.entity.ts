import { Column, Entity as OrmEntity, JoinColumn, OneToOne, Unique } from 'typeorm';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
@Unique(['studentId'])
export class OrmAdmin extends CommonTypeOrm {
  @Column()
  studentId!: number;

  @Column()
  name!: string;

  @Column()
  phoneNumber!: string;

  @Column({ default: 0 })
  role!: number;

  @OneToOne(() => OrmClub, (club) => club.admin, { nullable: true })
  @JoinColumn()
  club: OrmClub;
}

import { Column, Entity as OrmEntity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { OrmCategory } from './category.entity';
import { OrmComment } from './comment.entity';
import { CommonTypeOrm } from './common/common';
import { OrmReportGathering } from './report-gathering.entity';
import { OrmUser } from './user.entity';

@OrmEntity()
export class OrmGathering extends CommonTypeOrm {
  @Column()
  title!: string;

  @Column()
  body!: string;

  @Column({ default: 0 })
  numberOfPersonsJoined: number;

  @Column()
  numberOfPersonsToInvite!: number;

  @Column({ type: 'date' })
  deadline: Date;

  @Column({ type: 'boolean', default: false })
  closed: boolean;

  @Column()
  openChatUrl: string;

  @ManyToOne(() => OrmUser, (user) => user.gatherings, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: OrmUser;

  @ManyToOne(() => OrmCategory, (category) => category.gatherings, { onUpdate: 'CASCADE' })
  category: OrmCategory;

  @OneToMany(() => OrmComment, (comment) => comment.gathering, { cascade: true })
  comments: OrmComment[];

  @OneToMany(() => OrmReportGathering, (report) => report.gathering, { cascade: true })
  reports: OrmReportGathering[];

  @ManyToMany(() => OrmUser, (ormUser) => ormUser.participantsGatherings)
  @JoinTable({ name: 'orm_participants' })
  participants: OrmUser[];
}

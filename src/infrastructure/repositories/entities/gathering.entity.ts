import { Column, Entity as OrmEntity, ManyToOne, OneToMany } from 'typeorm';
import { OrmCategory } from './category.entity';
import { CommonTypeOrm } from './common/common';
import { EmParticipationInfo } from './embedded/embedded';
import { OrmReportGathering } from './report-gathering.entity';
import { OrmUser } from './user.entity';

/**
 * 실험삼아 임베디드 엔티티를 사용해봄
 */
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

  @Column((_) => EmParticipationInfo)
  participation!: EmParticipationInfo;

  @ManyToOne((type) => OrmUser, (user) => user.gatherings, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: OrmUser;

  @ManyToOne((type) => OrmCategory, (category) => category.gatherings, { onUpdate: 'CASCADE' })
  category: OrmCategory;

  @OneToMany((_) => OrmReportGathering, (report) => report.gathering, { cascade: true })
  reports: OrmReportGathering[];
}

import { Column, Entity as OrmEntity, ManyToOne, OneToMany } from 'typeorm';
import { CommonTypeOrm } from './common/common';
import { OrmGathering } from './gathering.entity';
import { OrmReportComment } from './report-comment.entity';
import { OrmUser } from './user.entity';

@OrmEntity()
export class OrmComment extends CommonTypeOrm {
  @Column({ type: 'text' })
  content!: string;

  @Column({ nullable: true })
  parentCommentId?: number;

  @ManyToOne(() => OrmUser, (user) => user.comments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: OrmUser;

  @ManyToOne(() => OrmGathering, (gathering) => gathering.comments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  gathering: OrmGathering;

  @OneToMany(() => OrmReportComment, (report) => report.comment, { cascade: true })
  reports: OrmReportComment[];
}

import { Column, Entity as OrmEntity, ManyToOne, OneToMany } from 'typeorm';
import { OrmComment } from './comment.entity';
import { CommonTypeOrm } from './common/common';
import { OrmReportReComment } from './report-recomment.entity';
import { OrmUser } from './user.entity';

@OrmEntity()
export class OrmReComment extends CommonTypeOrm {
  @Column({ type: 'text' })
  content!: string;

  @ManyToOne((type) => OrmUser, (user) => user.reComments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: OrmUser;

  @ManyToOne((type) => OrmComment, (comment) => comment.reComments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  comment: OrmComment;

  @OneToMany((_) => OrmReportReComment, (report) => report.reComment, { cascade: true })
  reports: OrmReportReComment[];
}

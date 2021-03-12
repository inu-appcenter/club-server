import { Column, Entity as OrmEntity, ManyToOne, OneToMany } from 'typeorm';
import { CommonTypeOrm } from './common/common';
import { OrmReComment } from './recomment.entity';
import { OrmReportComment } from './report-comment.entity';
import { OrmUser } from './user.entity';

@OrmEntity()
export class OrmComment extends CommonTypeOrm {
  @Column({ type: 'text' })
  content!: string;

  @ManyToOne((type) => OrmUser, (user) => user.comments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: OrmUser;

  @OneToMany((type) => OrmReComment, (reComment) => reComment.comment)
  reComments: OrmReComment[];

  @OneToMany((_) => OrmReportComment, (report) => report.comment, { cascade: true })
  reports: OrmReportComment[];
}

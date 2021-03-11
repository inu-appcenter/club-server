import { ManyToOne } from 'typeorm';
import { CommonTypeOrm } from './common/common';
import { OrmReComment } from './recomment.entity';
import { Entity as OrmEntity } from 'typeorm';

@OrmEntity()
export class OrmReportReComment extends CommonTypeOrm {
  @ManyToOne((_) => OrmReComment, (reComment) => reComment.reports, { onDelete: 'CASCADE' })
  reComment: OrmReComment;
}

import { ManyToOne } from 'typeorm';
import { OrmComment } from './comment.entity';
import { CommonTypeOrm } from './common/common';
import { Entity as OrmEntity } from 'typeorm';

@OrmEntity()
export class OrmReportComment extends CommonTypeOrm {
  @ManyToOne(() => OrmComment, (comment) => comment.reports, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  comment: OrmComment;
}

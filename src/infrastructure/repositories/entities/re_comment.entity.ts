import { Column, Entity as OrmEntity, ManyToOne } from 'typeorm';
import { OrmComment } from './comment.entity';
import { CommonTypeOrm } from './common/common';
import { OrmUser } from './user.entity';

@OrmEntity('reComment')
export class OrmReComment extends CommonTypeOrm {
  @Column({ type: 'text' })
  content!: string;

  @ManyToOne((type) => OrmUser, (user) => user.reComments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: OrmUser;

  @ManyToOne((type) => OrmComment, (comment) => comment.reComments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  comment: OrmComment;
}

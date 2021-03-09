import { Column, Entity as OrmEntity, JoinTable, ManyToMany, OneToMany, Unique } from 'typeorm';
import { OrmComment } from './comment.entity';
import { CommonTypeOrm } from './common/common';
import { OrmGathering } from './gathering.entity';
import { OrmReComment } from './recomment.entity';

@OrmEntity()
@Unique(['studentId'])
export class OrmUser extends CommonTypeOrm {
  @Column()
  studentId!: number;

  @Column()
  nickname!: string;

  @OneToMany((type) => OrmGathering, (gathering) => gathering.user)
  gatherings: OrmGathering[];

  @OneToMany((type) => OrmComment, (comment) => comment.user)
  comments: OrmComment[];

  @OneToMany((type) => OrmReComment, (reComment) => reComment.user)
  reComments: OrmReComment[];

  @ManyToMany((type) => OrmGathering, (gathering) => gathering.id)
  @JoinTable({ name: 'orm_participants' })
  participantsGatherings: OrmGathering[];
}

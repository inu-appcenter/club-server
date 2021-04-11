import { Column, Entity as OrmEntity, JoinTable, ManyToMany, OneToMany, Unique } from 'typeorm';
import { OrmComment } from './comment.entity';
import { CommonTypeOrm } from './common/common';
import { OrmGathering } from './gathering.entity';

@OrmEntity()
@Unique(['studentId'])
export class OrmUser extends CommonTypeOrm {
  @Column()
  studentId!: number;

  @Column()
  nickname!: string;

  @OneToMany(() => OrmGathering, (gathering) => gathering.user, { cascade: true })
  gatherings: OrmGathering[];

  @OneToMany(() => OrmComment, (comment) => comment.user, { cascade: true })
  comments: OrmComment[];

  @ManyToMany(() => OrmGathering, (gathering) => gathering.id, { cascade: true })
  @JoinTable({ name: 'orm_participants' })
  participantsGatherings: OrmGathering[];
}

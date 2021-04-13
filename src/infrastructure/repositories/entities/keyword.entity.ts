import { Column, Entity as OrmEntity, JoinTable, ManyToMany } from 'typeorm';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmKeyword extends CommonTypeOrm {
  @Column()
  keyword: string;

  @ManyToMany(() => OrmClub)
  @JoinTable({ name: 'orm_club_keyword' })
  clubs!: OrmClub[];
}

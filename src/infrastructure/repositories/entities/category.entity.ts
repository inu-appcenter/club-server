import { Column, Entity as OrmEntity, OneToMany } from 'typeorm';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';
import { OrmGathering } from './gathering.entity';

@OrmEntity()
export class OrmCategory extends CommonTypeOrm {
  @Column()
  name!: string;

  @OneToMany((type) => OrmClub, (club) => club.category)
  clubs: OrmClub[];

  @OneToMany((type) => OrmGathering, (gathering) => gathering.category)
  gatherings: OrmGathering[];
}

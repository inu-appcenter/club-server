import { Column, Entity as OrmEntity } from 'typeorm';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubTodayImage extends CommonTypeOrm {
  @Column()
  url!: string;
}

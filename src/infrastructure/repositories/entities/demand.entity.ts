import { Column, Entity as OrmEntity } from 'typeorm';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmDemand extends CommonTypeOrm {
  @Column()
  studentId!: number;

  @Column()
  name!: string;

  @Column()
  phonNumber!: string;
}

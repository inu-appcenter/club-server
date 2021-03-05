import { Column, Entity as OrmEntity, Unique } from 'typeorm';
import { CommonTypeOrm } from './common/common';

@OrmEntity('superAdmin')
@Unique(['superAdminId'])
export class OrmSuperAdmin extends CommonTypeOrm {
  @Column()
  superAdminId!: string;

  @Column()
  name!: string;

  @Column()
  phonNumber!: string;

  @Column()
  password!: string;
}

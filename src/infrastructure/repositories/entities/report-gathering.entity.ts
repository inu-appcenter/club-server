import { ManyToOne } from 'typeorm';
import { CommonTypeOrm } from './common/common';
import { OrmGathering } from './gathering.entity';
import { Entity as OrmEntity } from 'typeorm';

@OrmEntity()
export class OrmReportGathering extends CommonTypeOrm {
  @ManyToOne(() => OrmGathering, (gathering) => gathering.reports, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  gathering: OrmGathering;
}

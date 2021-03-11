import { ManyToOne } from 'typeorm';
import { CommonTypeOrm } from './common/common';
import { OrmGathering } from './gathering.entity';
import { Entity as OrmEntity } from 'typeorm';

@OrmEntity()
export class OrmReportGathering extends CommonTypeOrm {
  @ManyToOne((_) => OrmGathering, (gathering) => gathering.reports, { onDelete: 'CASCADE' })
  gathering: OrmGathering;
}

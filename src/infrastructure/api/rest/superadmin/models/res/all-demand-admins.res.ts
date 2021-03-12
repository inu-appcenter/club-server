import { ApiProperty } from '@nestjs/swagger';
import { DemandAdminRes } from '../../../admin/models/res/demand-admin.res';

export class AllDemandAdminsRes {
  @ApiProperty({ isArray: true, type: DemandAdminRes })
  demandAdmins: DemandAdminRes[];
}

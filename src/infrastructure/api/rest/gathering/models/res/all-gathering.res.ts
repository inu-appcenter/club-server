import { ApiProperty } from '@nestjs/swagger';
import { GatheringRes } from './gathering.res';

export class AllGatheringsRes {
  @ApiProperty({ isArray: true, type: GatheringRes })
  gatherings: GatheringRes[];
}

import { ApiProperty } from '@nestjs/swagger';
import { ClubTodayRes } from './clubtoday.res';

export class AllClubTodayRes {
  @ApiProperty({ isArray: true, type: ClubTodayRes })
  clubTodayList: ClubTodayRes[];
}

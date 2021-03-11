import { ApiProperty } from '@nestjs/swagger';
import { ClubRes } from './club.res';

export class SearchClubsRes {
  @ApiProperty({ isArray: true, type: ClubRes })
  clubs: ClubRes[];
}

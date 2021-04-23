import { ClubToday } from '@/domain/entity/ClubToday';
import { OrmClubToday } from '../entities/clubtoday.entity';

export async function toClubToday(ormClubToday: OrmClubToday, clubId?: number): Promise<ClubToday> {
  if (!ormClubToday) return null;
  const { club } = ormClubToday;
  const clubToday = ClubToday.new({ ...ormClubToday, clubId: club ? club.id : clubId });
  return clubToday;
}

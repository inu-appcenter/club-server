import { ClubToday } from '@/domain/entity/ClubToday';
import { OrmClubToday } from '../entities/clubtoday.entity';

export async function toClubToday(ormClubToday: OrmClubToday): Promise<ClubToday> {
  if (!ormClubToday) return null;
  const { club } = ormClubToday;
  const clubToday = ClubToday.new({ ...ormClubToday, clubId: club.id });
  return clubToday;
}

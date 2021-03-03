import { ClubToday } from '../entities/ClubToday';

/**
 * ? 앱에서는 조회만 가능
 * todo: 웹
 */
export interface IClubTodayRepository {
  getClubTodayList(): Promise<ClubToday[]>;
}

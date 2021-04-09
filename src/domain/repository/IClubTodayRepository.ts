import { ClubToday } from '../entity/ClubToday';

export interface IClubTodayRepository {
  /**
   * 클럽투데이 모두 조회
   * @description 클럽투데이 모두 조회
   */
  getClubTodayList(): Promise<ClubToday[]>;

  /**
   * 특정 동아리의 클럽투데이 모두 조회
   * @param clubId 클럽 pk
   * @description 특정 동아리의 클럽투데이 모두 조회
   */
  getClubTodayListByClubId(clubId: number): Promise<ClubToday[]>;

  /**
   * 클럽투데이 상세 조회
   * @param clubTodayId 클럽투데이 pk
   * @description pk값으로 특정 클럽투데이 상세 조회
   */
  getClubTodayById(clubTodayId: number): Promise<ClubToday>;

  /**
   * 클럽투데이 생성
   * @param clubToday 클럽투데이 엔티티
   * @description 클럽투데이 생성
   * @permission 관리자
   */
  createClubToday(clubToday: ClubToday): Promise<ClubToday>;

  /**
   * 클럽투데이 수정
   * @param clubTodayId 클럽투데이 pk
   * @description pk값으로 특정 클럽투데이 수정
   * @permission 관리자
   */
  updateClubTodayById(clubTodayId: number): Promise<void>;

  /**
   * 클럽투데이 삭제
   * @param clubTodayId 클럽투데이 pk
   * @description pk값으로 특정 클럽투데이 삭제
   * @permission 슈퍼관리자?, 관리자
   */
  deleteClubTodayById(clubTodayId: number): Promise<void>;
}

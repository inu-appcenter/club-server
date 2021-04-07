import { ApplicationInfo } from '../entity/ApplicationInfo';

export interface IApplicationInfoRepository {
  /**
   * 지원 정보 생성
   * @param applicationInfo 지원 정보 엔티티
   * @description 동아리의 지원 정보를 등록
   * @permission 관리자
   */
  createApplicationInfo(applicationInfo: ApplicationInfo): Promise<ApplicationInfo>;

  /**
   * 지원 정보 조회
   * @param applicationInfoId 지원 정보 pk
   * @description pk값으로 특정 지원 정보 조회
   * @permission 관리자
   */
  getApplicationInfoById(applicationInfoId: number): Promise<ApplicationInfo>;

  /**
   * 지원 정보 수정
   * @param applicationInfo 지원 정보 엔티티
   * @description 지원 정보를 모두 수정
   * @permission 관리자
   */
  updateApplicationInfoById(applicationInfo: ApplicationInfo): Promise<void>;
}

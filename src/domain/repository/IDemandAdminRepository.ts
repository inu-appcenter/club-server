import { DemandAdmin } from '../entity/DemandAdmin';

export interface IDemandAdminRepository {
  /**
   * 관리자 등록 요청
   * @param demandAdmin 어드민 엔티티
   * @description 관리자 등록 요청
   * @member 슈퍼관리자
   */
  demandAdmin(demandAdmin: DemandAdmin): Promise<DemandAdmin>;

  /**
   * 관리자 요청 모두 조회
   * @description 관리자 요청 모두 조회
   * @member 슈퍼관리자
   */
  getDemandAdmins(): Promise<DemandAdmin[]>;

  /**
   * 관리자 요청 삭제
   * @param demandId 관리자 요청 pk
   * @description 관리자 요청 삭제
   * @member 슈퍼관리자
   */
  deleteDemandAdminById(demandId: number): Promise<void>;
}

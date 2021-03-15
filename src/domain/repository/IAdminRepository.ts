import { Admin } from '../entity/Admin';

export interface IAdminRepository {
  /**
   * 관리자 생성
   * @param admin 어드민 엔티티
   * @description 슈퍼 관리자의 승인으로 관리자 등록
   * @permission 슈퍼관리자
   */
  createAdmin(admin: Admin): Promise<Admin>;

  /**
   * 관리자 모두 조회
   * @description 관리자 모두 조회
   * @permission 슈퍼관리자
   */
  getAdmins(): Promise<Admin[]>;

  /**
   * 관리자 조회
   * @param adminId 어드민 pk
   * @description pk값으로 특정 관리자 조회
   * @permission 슈퍼관리자, 관리자
   */
  getAdminById(adminId: number): Promise<Admin>;

  /**
   * 관리자 수정
   * @param admin 어드민 엔티티
   * @description 관리자 정보를 모두 수정
   * @permission 관리자
   */
  updateAdminById(admin: Admin): Promise<void>;

  /**
   * 관리자 탈퇴
   * @param adminId 어드민 pk
   * @description 관리자 데이터 제거
   * @permission 관리자
   */
  removeAdminById(adminId: number): Promise<void>;
}

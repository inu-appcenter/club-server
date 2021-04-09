import { Admin } from '../entity/Admin';

export interface IAdminRepository {
  /**
   * 관리자 등록 요청과 생성
   * @param admin 어드민 엔티티
   * @description 슈퍼관리자가 관리자 요청을 확인한 후 demand 필드를 false로 변경
   * @permission 슈퍼관리자
   */
  createAdmin(admin: Admin): Promise<Admin>;

  /**
   * 관리자 모두 조회
   * @param demand 실제 관리자인지 관리자 요청인지 판별
   * @description 실제 관리자들을 조회하거나 관리자 요청들을 조회
   * @permission 슈퍼관리자
   */
  getAdmins(demand: boolean): Promise<Admin[]>;

  /**
   * 관리자, 요청자 조회
   * @param adminId 어드민 pk
   * @description 키값으로 관리자 조회
   * @permission 슈퍼관리자, 관리자
   */
  getAdminById(adminId: number): Promise<Admin>;

  /**
   * 관리자, 요청자 조회
   * @param studentId 학번
   * @description 키값으로 관리자 조회
   * @permission 슈퍼관리자, 관리자
   */
  getAdminByStudentId(studentId: number): Promise<Admin>;

  /**
   * 관리자 수정
   * @param admin 관리자
   * @description 관리자 정보를 모두 수정
   * @permission 관리자
   */
  updateAdmin(admin): Promise<void>;

  /**
   * 관리자 탈퇴 또는 삭제
   * @param adminId 관리자 pk
   * @description 관리자 데이터 제거
   * @permission 슈퍼관리자, 관리자
   */
  removeAdminById(adminId: number): Promise<void>;
}

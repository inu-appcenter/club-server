import { User } from '../entity/User';

export interface IUserRepository {
  /**
   * 사용자 생성
   * @param user 유저 엔티티
   * @description 첫 서비스 사용자일 때 사용자 생성
   * @permission 사용자
   */
  createUser(user: User): Promise<User>;

  /**
   * 사용자 모두 조회
   * @description 사용자 모두 조회
   * @permission 슈퍼관리자
   */
  getUsers(): Promise<User[]>;

  /**
   * 사용자 조회
   * @param userId 유저 pk
   * @description pk값으로 특정 사용자 조회
   * @permission 슈퍼관리자, 사용자
   */
  getUserById(userId: number): Promise<User>;

  /**
   * 사용자 수정
   * @param user 유저 엔티티
   * @description 사용자 정보를 모두 수정
   * @permission 사용자
   */
  updateUserById(user: User): Promise<void>;

  /**
   * 사용자 탈퇴
   * @param userId 유저 pk
   * @description 사용자 또는 사용자와와 관련된 데이터를 모두 제거
   * @permission 슈퍼관리자, 사용자
   */
  removeUserById(userId: number): Promise<void>;
}

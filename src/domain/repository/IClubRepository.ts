import { Club } from '../entity/Club';

export interface IClubRepository {
  /**
   * 동아리 생성
   * @param club 클럽 엔티티
   * @description 새로운 동아리를 생성
   * @permission 관리자
   */
  createClub(club: Club): Promise<Club>;

  /**
   * 동아리 상세 조회
   * @param clubId 클럽 pk
   * @description pk값으로 특정 동아리 상세 조회
   */
  getClubById(clubId: number): Promise<Club>;

  /**
   * 동아리 모두 조회
   * @description 동아리 모두 조회
   */
  getAllClubs(): Promise<Club[]>;

  /**
   * 카테고리별 동아리 조회
   * @param categoryId 카테고리 pk
   * @description 카테고리 pk값으로 카테고리별 동아리들을 조회
   */
  getClubsByCategoryId(categoryId: number): Promise<Club[]>;

  /**
   * 키워드별 동아리 조회
   * @param keyword 찾을 키워드
   * @description 저장된 키워드들에서 일치하는 동아리들을 조회
   */
  getClubsByKeyword(keyword: string): Promise<Club[]>;

  /**
   * todo
   * 동아리 수정
   * @param club 클럽 엔티티
   * @description 동아리 정보를 모두 수정
   * @permission 관리자
   */
  updateClubById(club: Club): Promise<void>;

  /**
   * 동아리 삭제
   * @param clubId 클럽 pk
   * @description pk값으로 동아리 삭제
   * @permission 관리자
   */
  removeClubById(clubId: number): Promise<void>;

  /**
   * todo
   */
  recommendClubs(): Promise<void>;
}

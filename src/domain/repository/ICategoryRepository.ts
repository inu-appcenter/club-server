import { Category } from '../entity/Category';

export interface ICategoryRepository {
  /**
   * 카테고리생성
   * @param category 카테고리 엔티티
   * @description 동아리의 카테고리를 등록
   * @permission 슈퍼관리자
   */
  createCategory(category: Category): Promise<Category>;

  /**
   * 카테고리 조회
   * @param categoryId 카테고리 pk
   * @description pk값으로 특정 카테고리 조회
   * @permission 슈퍼관리자
   */
  getCategoryById(categoryId: number): Promise<Category>;

  /**
   * 카테고리 조회
   * @param name 카테고리 이름
   * @description 카테고리 이름으로 특정 카테고리 조회
   * @permission 슈퍼관리자
   */
  getCategoryByName(name: string): Promise<Category>;

  /**
   * 카테고리 모두 조회
   * @description 카테고리 모두 조회
   * @permission 슈퍼관리자
   */
  getCategories(): Promise<Category[]>;

  /**
   * 카테고리 수정
   * @param category 카테고리 엔티티
   * @description 카테고리를 모두 수정
   * @permission 슈퍼관리자
   */
  updateCategory(category: Category): Promise<void>;
}

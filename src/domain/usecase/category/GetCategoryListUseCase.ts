import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class GetCategoryListUseCase implements IUseCase<any, Category[]> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  /**
   * 카테고리 모두 조회
   * @step_1 저장소에 있는 카테고리를 모두 조회한다.
   * @returns Category[]
   */
  execute(): Promise<Category[]> {
    return this.categoryRepository.getCategories();
  }
}

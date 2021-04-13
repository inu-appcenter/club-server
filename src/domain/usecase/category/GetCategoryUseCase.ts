import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { IGetCategoryPort } from '@/domain/port/category/IGetCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class CreateCategoryUseCase implements IUseCase<IGetCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  /**
   * 카테고리 조회
   * @param port IGetAdminPort
   * @step_1 port로 받아온 id값으로 특정 카테고리를 조회한다.
   * @returns Category
   */
  execute(port?: IGetCategoryPort): Promise<Category> {
    return this.categoryRepository.getCategoryById(port.id);
  }
}

import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { IGetCategoryPort } from '@/domain/port/category/IGetCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class GetCategoryUseCase implements IUseCase<IGetCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  /**
   * 카테고리 조회
   * @param port IGetAdminPort
   * @step_1 port로 받아온 id값으로 특정 카테고리를 조회한다.
   * @returns Category
   */
  async execute(port?: IGetCategoryPort): Promise<Category> {
    const categoryExist = this.categoryRepository.getCategoryById(port.id);
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 카테고리' });
    return categoryExist;
  }
}

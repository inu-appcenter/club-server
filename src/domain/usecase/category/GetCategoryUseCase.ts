import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { IGetCategoryPort } from '@/domain/port/category/IGetCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class CreateCategoryUseCase implements IUseCase<IGetCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  execute(port?: IGetCategoryPort): Promise<Category> {
    return this.categoryRepository.getCategoryById(port.id);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class CreateCategoryUseCase implements IUseCase<any, Category[]> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  execute(): Promise<Category[]> {
    return this.categoryRepository.getCategories();
  }
}

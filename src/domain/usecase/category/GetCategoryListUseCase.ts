import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { ICreateCategoryPort } from '@/domain/port/category/ICreateCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class CreateCategoryUseCase implements IUseCase<ICreateCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  execute(port?: ICreateCategoryPort): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}

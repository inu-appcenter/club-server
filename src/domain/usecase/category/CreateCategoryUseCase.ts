import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { ICreateCategoryPort } from '@/domain/port/category/ICreateCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class CreateCategoryUseCase implements IUseCase<ICreateCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(port?: ICreateCategoryPort): Promise<Category> {
    const categoryExist = await this.categoryRepository.getCategoryByName(port.name);
    if (categoryExist) throw Exception.new({ code: Code.CONFLICT, data: port.name, overrideMessage: '이름 중복' });
    return this.categoryRepository.createCategory(await Category.new(port));
  }
}

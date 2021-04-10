import { IUseCase } from '@/common/usecase/IUseCase';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IUpdateCategoryPort } from '@/domain/port/category/IUpdateCategoryPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class UpdateCategoryUseCase implements IUseCase<IUpdateCategoryPort, void> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(port?: IUpdateCategoryPort): Promise<void> {
    const [categoryExist, categoryConflict] = await Promise.all([
      this.categoryRepository.getCategoryById(port.id),
      this.categoryRepository.getCategoryByName(port.name),
    ]);
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '카테고리 없음' });
    if (categoryConflict) throw Exception.new({ code: Code.CONFLICT, data: port.name, overrideMessage: '이름 중복' });
    await categoryExist.edit(port);
    await this.categoryRepository.updateCategory(categoryExist);
  }
}

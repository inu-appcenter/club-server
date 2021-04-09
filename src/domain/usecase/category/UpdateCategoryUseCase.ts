import { IUseCase } from '@/common/usecase/IUseCase';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IUpdateCategoryPort } from '@/domain/port/category/IUpdateCategoryPort';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UpdateCategoryUseCase implements IUseCase<IUpdateCategoryPort, void> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(port?: IUpdateCategoryPort): Promise<void> {
    const [categoryExist, categoryConflict] = await Promise.all([
      this.categoryRepository.getCategoryById(port.id),
      this.categoryRepository.getCategoryByName(port.name),
    ]);
    if (!categoryExist) throw new HttpException('카테고리 없음', HttpStatus.NOT_FOUND);
    if (categoryConflict) throw new HttpException('카테고리 중복', HttpStatus.CONFLICT);
    await categoryExist.edit(port);
    await this.categoryRepository.updateCategory(categoryExist);
  }
}

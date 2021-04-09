import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { ICreateCategoryPort } from '@/domain/port/category/ICreateCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateCategoryUseCase implements IUseCase<ICreateCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(port?: ICreateCategoryPort): Promise<Category> {
    const categoryExist = await this.categoryRepository.getCategoryByName(port.name);
    if (categoryExist) throw new HttpException('카테고리 중복', HttpStatus.CONFLICT);
    return this.categoryRepository.createCategory(await Category.new(port));
  }
}

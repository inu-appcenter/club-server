import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Category } from '@/domain/entity/Category';
import { ICreateCategoryPort } from '@/domain/port/category/ICreateCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';

export class CreateCategoryUseCase implements IUseCase<ICreateCategoryPort, Category> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  /**
   * 카테고리 생성
   * @param port ICreateCategoryPort
   * @step_1 port로 받은 name이 존재하는지 확인한다.
   * @step_2 동일한 카테고리가 존재하면 예외를 발생시킨다.
   * @step_3 동일한 카테고리가 없다면 새로운 카테고리를 등록시킨다.
   * @returns Category
   */
  async execute(port?: ICreateCategoryPort): Promise<Category> {
    const categoryExist = await this.categoryRepository.getCategoryByName(port.name);
    if (categoryExist) throw Exception.new({ code: Code.CONFLICT, data: port.name, overrideMessage: '이름 중복' });
    const category = await Category.new(port);
    return this.categoryRepository.createCategory(category);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IUpdateCategoryPort } from '@/domain/port/category/IUpdateCategoryPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class UpdateCategoryUseCase implements IUseCase<IUpdateCategoryPort, void> {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  /**
   * 카테고리 수정
   * @param port IUpdateCategoryPort
   * @step_1 port로 받아온 id값으로 특정 카테고리를 조회한다.
   * @step_2 카테고리가 존재하지 않는다면 예외를 발생시킨다.
   * @step_3 동일한 이름의 카테고리가 존재한다면 예외를 발생시킨다.
   * @step_4 카테고리를 수정 후 등록한다.
   * @returns Category
   */
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

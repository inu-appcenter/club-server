import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubByCategoryPort } from '@/domain/port/club/IGetClubByCategoryPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubByCategoryUseCase implements IUseCase<IGetClubByCategoryPort, Club[]> {
  constructor(
    private readonly clubRepository: IClubRepository,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  /**
   * 카테고리별 동아리 조회
   * @param port IGetClubByCategoryPort
   * @step_1 port에서 받아온 categoryId값으로 카테고리의 유무를 확인한다.
   * @step_2 categoryId값으로 카테고리별 동아리를 조회한다.
   * @returns Club[]
   */
  async execute(port?: IGetClubByCategoryPort): Promise<Club[]> {
    const categoryExist = await this.categoryRepository.getCategoryById(port.categoryId);
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '카테고리 없음' });
    return this.clubRepository.getClubsByCategoryId(port.categoryId);
  }
}

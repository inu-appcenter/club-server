import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubByCategoryPort } from '@/domain/port/club/IGetClubByCategoryPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubByCategoryUseCase implements IUseCase<IGetClubByCategoryPort, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}

  /**
   * 카테고리별 동아리 조회
   * @param port IGetClubByCategoryPort
   * @step_1 port에서 받아온 categoryId값으로 카테고리별 동아리를 조회한다.
   * @returns Club[]
   */
  execute(port?: IGetClubByCategoryPort): Promise<Club[]> {
    return this.clubRepository.getClubsByCategoryId(port.categoryId);
  }
}

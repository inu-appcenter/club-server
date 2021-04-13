import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubListUseCase implements IUseCase<any, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}

  /**
   * 동아리 모두 조회
   * @step_1 동아리를 모두 조회한다.
   * @returns Club[]
   */
  async execute(): Promise<Club[]> {
    return this.clubRepository.getClubs();
  }
}

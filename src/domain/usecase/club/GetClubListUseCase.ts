import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubListUseCase implements IUseCase<any, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}

  async execute(port?: any): Promise<Club[]> {
    return this.clubRepository.getClubs();
  }
}

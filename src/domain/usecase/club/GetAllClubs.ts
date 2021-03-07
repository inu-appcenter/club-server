import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetAllClubs } from '@/domain/port/club/IGetAllClubs';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetAllClubs implements IUseCase<IGetAllClubs, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}
  async execute(port?: IGetAllClubs): Promise<Club[]> {
    return this.clubRepository.getAllClubs();
  }
}

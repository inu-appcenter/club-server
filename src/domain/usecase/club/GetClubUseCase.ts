import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubPort } from '@/domain/port/club/IGetClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubUseCase implements IUseCase<IGetClubPort, Club> {
  constructor(private readonly clubRepository: IClubRepository) {}

  execute(port?: IGetClubPort): Promise<Club> {
    return this.clubRepository.getClubById(port.id);
  }
}

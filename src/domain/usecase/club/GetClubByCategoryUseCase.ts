import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubByCategoryPort } from '@/domain/port/club/IGetClubByCategoryPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubByCategoryUseCase implements IUseCase<IGetClubByCategoryPort, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}
  execute(port?: IGetClubByCategoryPort): Promise<Club[]> {
    return this.clubRepository.getClubsByCategoryId(port.id);
  }
}

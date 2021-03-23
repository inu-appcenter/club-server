import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateClubPort } from '@/domain/port/club/IUpdateClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class UpdateClubUseCase implements IUseCase<IUpdateClubPort, void> {
  constructor(private readonly clubRepository: IClubRepository) {}

  async execute(port?: IUpdateClubPort): Promise<void> {
    const club = await this.clubRepository.getClubById(port.id);
    await club.edit(port);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { ICreateClubPort } from '@/domain/port/club/ICreateClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class CreateClubUseCase implements IUseCase<any, Club> {
  constructor(private readonly clubRepository: IClubRepository) {}

  async execute(port?: ICreateClubPort): Promise<Club> {
    const club = await Club.new(port);
    return this.clubRepository.createClub(club);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IGetClubTodayPort } from '@/domain/port/clubtoday/IGetClubTodayPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayUseCase implements IUseCase<IGetClubTodayPort, ClubToday> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  execute(port?: IGetClubTodayPort): Promise<ClubToday> {
    return this.clubTodayRepository.getClubTodayById(port.id);
  }
}

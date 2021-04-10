import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IGetClubTodayListByClubPort } from '@/domain/port/clubtoday/IGetClubTodayListByClubPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayListByClubUseCase implements IUseCase<IGetClubTodayListByClubPort, ClubToday[]> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  execute(port?: IGetClubTodayListByClubPort): Promise<ClubToday[]> {
    return this.clubTodayRepository.getClubTodayListByClubId(port.clubId);
  }
}

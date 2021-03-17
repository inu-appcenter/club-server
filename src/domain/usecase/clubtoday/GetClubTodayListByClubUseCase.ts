import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IGetClubTodayByClubPort } from '@/domain/port/clubtoday/IGetClubTodayByClubPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayListByClubUseCase implements IUseCase<IGetClubTodayByClubPort, ClubToday[]> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  execute(port?: IGetClubTodayByClubPort): Promise<ClubToday[]> {
    return this.clubTodayRepository.getClubTodayListByClubId(port.clubId);
  }
}

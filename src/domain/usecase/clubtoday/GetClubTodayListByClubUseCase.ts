import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IGetClubTodayListByClubPort } from '@/domain/port/clubtoday/IGetClubTodayListByClubPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayListByClubUseCase implements IUseCase<IGetClubTodayListByClubPort, ClubToday[]> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  /**
   * 동아리별 클럽투데이 조회
   * @param port IGetClubTodayListByClubPort
   * @step_1 port로 받아온 clubId값으로 동아리별 클럽투데이들을 조회한다.
   * @returns ClubToday[]
   */
  execute(port?: IGetClubTodayListByClubPort): Promise<ClubToday[]> {
    return this.clubTodayRepository.getClubTodayListByClubId(port.clubId);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IGetClubTodayPort } from '@/domain/port/clubtoday/IGetClubTodayPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayUseCase implements IUseCase<IGetClubTodayPort, ClubToday> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  /**
   * 클럽투데이 조회
   * @param port IGetClubTodayPort
   * @step_1 port로 받아온 id값으로 특정 클럽투데이를 조회한다.
   * @returns ClubToday
   */
  execute(port?: IGetClubTodayPort): Promise<ClubToday> {
    return this.clubTodayRepository.getClubTodayById(port.id);
  }
}

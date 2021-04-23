import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
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
  async execute(port?: IGetClubTodayPort): Promise<ClubToday> {
    const clubTodayExist = await this.clubTodayRepository.getClubTodayById(port.id);
    if (!clubTodayExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 클럽투데이' });
    return clubTodayExist;
  }
}

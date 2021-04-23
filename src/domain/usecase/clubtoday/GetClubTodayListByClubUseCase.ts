import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IGetClubTodayListByClubPort } from '@/domain/port/clubtoday/IGetClubTodayListByClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayListByClubUseCase implements IUseCase<IGetClubTodayListByClubPort, ClubToday[]> {
  constructor(
    private readonly clubTodayRepository: IClubTodayRepository,
    private readonly clubRepository: IClubRepository,
  ) {}

  /**
   * 동아리별 클럽투데이 조회
   * @param port IGetClubTodayListByClubPort
   * @step_1 port로 받아온 clubId값으로 동아리별 클럽투데이들을 조회한다.
   * @returns ClubToday[]
   */
  async execute(port?: IGetClubTodayListByClubPort): Promise<ClubToday[]> {
    const clubExist = await this.clubRepository.getClubById(port.clubId);
    if (!clubExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 동아리' });
    return this.clubTodayRepository.getClubTodayListByClubId(port.clubId);
  }
}

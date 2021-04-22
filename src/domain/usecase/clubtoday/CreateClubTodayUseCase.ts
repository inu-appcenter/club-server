import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { ICreateClubTodayPort } from '@/domain/port/clubtoday/ICreateClubTodayPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class CreateClubTodayUseCase implements IUseCase<ICreateClubTodayPort, ClubToday> {
  constructor(
    private readonly clubTodayRepository: IClubTodayRepository,
    private readonly clubRepository: IClubRepository,
  ) {}

  /**
   * 클럽투데이 생성
   * @param port ICreateClubTodayPort
   * @step_1 port로 받아온 clubId값으로 동아리를 조회한다.
   * @step_2 권한이 있는지 확인한다.
   * @step_3 새로운 클럽투데이를 생성한다.
   * @returns ClubToday
   */
  async execute(port?: ICreateClubTodayPort): Promise<ClubToday> {
    const clubExist = await this.clubRepository.getClubById(port.clubId);
    if (!clubExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 동아리' });
    if (clubExist.getAdminId() !== port.adminId)
      throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '권한 없음' });
    // const latelyDate = await this.clubTodayRepository.getLatelyDateByClubId(club.getId());
    // // todo: 날짜 비교
    // console.log(latelyDate);
    // if (false) {
    //   // 최근 날짜와 오늘 날짜가 같을 때
    //   throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '하루에 하나만 작성 가능' });
    // }
    const clubToday = await ClubToday.new(port);
    return this.clubTodayRepository.createClubToday(clubToday);
  }
}

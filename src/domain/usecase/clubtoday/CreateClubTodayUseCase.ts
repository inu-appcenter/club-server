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
   * @step_1 port로 받아온 id, adminId값으로 동아리를 조회한다.
   * @returns ClubToday
   */
  async execute(port?: ICreateClubTodayPort): Promise<ClubToday> {
    // const club = await this.clubRepository.getClubByIdAndAdminId(port.clubId, port.adminId);
    // const latelyDate = await this.clubTodayRepository.getLatelyDateByClubId(club.getId());
    // // todo: 날짜 비교
    // console.log(latelyDate);
    // if (false) {
    //   // 최근 날짜와 오늘 날짜가 같을 때
    //   throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '하루에 하나만 작성 가능' });
    // }
    // const clubToday = await ClubToday.new({
    //   headerImageUrl: port.headerImagUrl,
    //   club,
    //   ...port,
    // });
    // return this.clubTodayRepository.createClubToday(clubToday);
  }
}

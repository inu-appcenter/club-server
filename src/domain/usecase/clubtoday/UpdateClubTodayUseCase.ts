import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateClubTodayPort } from '@/domain/port/clubtoday/IUpdateClubTodayPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';
import { IClubImageRepository } from '@/domain/repository/IImageRepository';

export class UpdateClubTodayUseCase implements IUseCase<IUpdateClubTodayPort, void> {
  constructor(private imageRepository: IClubImageRepository, private clubTodayRepository: IClubTodayRepository) {}

  /**
   * 클럽투데이 수정
   * @param port IUpdateClubTodayPort
   * @step_1 port로 받아온 id값으로 특정 클럽투데이를 조회한다.
   * @step_2 클럽투데이가 존재하지 않으면 예외를 발생시킨다.
   * @step_3 클럽투데이의 엔티티를 수정하고 저장소에 등록한다.
   * @returns void
   */
  async execute(port?: IUpdateClubTodayPort): Promise<void> {
    const clubTodayExist = await this.clubTodayRepository.getClubTodayById(port.id);
    if (!clubTodayExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '클럽투데이 없음' });

    await clubTodayExist.edit({
      headerImageUrl: port.headerImageUrl,
      ...port,
    });
    await this.clubTodayRepository.updateClubToday(clubTodayExist);
  }
}

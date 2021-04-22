import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IDeleteClubTodayPort } from '@/domain/port/clubtoday/IDeleteClubTodayPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class DeleteClubTodayUseCase implements IUseCase<IDeleteClubTodayPort, void> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  /**
   * 클럽투데이 삭제
   * @param port IDeleteClubTodayPort
   * @step_1 port로 받아온 id값으로 클럽투데이를 삭제한다.
   * @returns void
   */
  async execute(port?: IDeleteClubTodayPort): Promise<void> {
    const clubTodayExist = await this.clubTodayRepository.getClubTodayById(port.id);
    if (!clubTodayExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 클럽투데이' });
    return this.clubTodayRepository.deleteClubTodayById(port.id);
  }
}

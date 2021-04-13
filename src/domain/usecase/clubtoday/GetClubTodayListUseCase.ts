import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayListUseCase implements IUseCase<any, ClubToday[]> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  /**
   * 클럽투데이 모두 조회
   * @step_1 저장소에 있는 클럽투데이들을 모두 조회한다
   * @returns ClubToday[]
   */
  execute(): Promise<ClubToday[]> {
    return this.clubTodayRepository.getClubTodayList();
  }
}

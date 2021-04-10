import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class GetClubTodayListUseCase implements IUseCase<any, ClubToday[]> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}

  execute(): Promise<ClubToday[]> {
    return this.clubTodayRepository.getClubTodayList();
  }
}

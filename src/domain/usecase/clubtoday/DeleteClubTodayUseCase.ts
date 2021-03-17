import { IUseCase } from '@/common/usecase/IUseCase';
import { IDeleteClubTodayPort } from '@/domain/port/clubtoday/IDeleteClubTodayPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';

export class DeleteClubTodayUseCase implements IUseCase<IDeleteClubTodayPort, void> {
  constructor(private readonly clubTodayRepository: IClubTodayRepository) {}
  execute(port?: IDeleteClubTodayPort): Promise<void> {
    this.clubTodayRepository.deleteClubTodayById(port.id);
    return;
  }
}

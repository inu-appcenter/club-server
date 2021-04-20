import { IUseCase } from '@/common/usecase/IUseCase';
import { IRemoveClubPort } from '@/domain/port/club/IRemoveClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class RemoveClubUseCase implements IUseCase<IRemoveClubPort, void> {
  constructor(private readonly clubRepository: IClubRepository) {}

  /**
   * 동아리 삭제
   * @step_1 port로 받아온 id값으로 동아리를 삭제한다.
   */
  execute(port?: IRemoveClubPort): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

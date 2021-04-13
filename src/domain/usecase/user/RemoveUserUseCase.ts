import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IRemoveUserPort } from '@/domain/port/user/IRemoveUserPort';

export class RemoveUserUseCase implements IUseCase<IRemoveUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 삭제
   * @param port IRemoveUserPort
   * @step_1 port로 받아온 id값으로 유저를 삭제한다.
   * @returns void
   */
  async execute(port?: IRemoveUserPort): Promise<void> {
    await this.userRepository.removeUserById(port.id);
  }
}

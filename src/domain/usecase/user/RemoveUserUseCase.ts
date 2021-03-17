import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IRemoveUserPort } from '@/domain/port/user/IRemoveUserPort';

export class RemoveUserUseCase implements IUseCase<IRemoveUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IRemoveUserPort): Promise<void> {
    await this.userRepository.removeUserById(port.userId);
  }
}

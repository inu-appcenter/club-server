import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IUpdateUserPort } from '@/domain/port/user/IUdateUserPort';

export class UpdateUserUseCase implements IUseCase<IUpdateUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IUpdateUserPort): Promise<void> {
    const user = await this.userRepository.getUserById(port.userId);
    await user.edit(port);
    await this.userRepository.updateUserById(user);
  }
}

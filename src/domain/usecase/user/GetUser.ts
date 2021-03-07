import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';
import { IGetUserPort } from '../../port/user/IGetUserPort';

export class GetUser implements IUseCase<IGetUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IGetUserPort): Promise<User> {
    return this.userRepository.getUserById(port.userId);
  }
}

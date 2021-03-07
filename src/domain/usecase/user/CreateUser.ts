import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { ICreateUserPort } from '../../port/user/ICreateUserPort';

export class CreateUser implements IUseCase<ICreateUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: ICreateUserPort): Promise<User> {
    const user = await User.new(port);
    return this.userRepository.createUser(user);
  }
}

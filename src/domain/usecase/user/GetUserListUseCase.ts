import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';

export class GetUserListUseCase implements IUseCase<any, User[]> {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(port?: any): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}

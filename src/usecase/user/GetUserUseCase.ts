import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class GetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(userId: number): Promise<User> {
    return this.userRepository.getUserById(userId);
  }
}

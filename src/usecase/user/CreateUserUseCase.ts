import { UserEntityPayload } from '@/domain/entity/types/payloads/UserEntityPayload';
import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(payload: UserEntityPayload): Promise<User> {
    const user = new User(payload);
    return this.userRepository.createUser(user);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';

export class GetUserListUseCase implements IUseCase<any, User[]> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 모두 조회
   * @step_1 저장소에 저장된 유저들을 조회한다.
   * @returns User[]
   */
  async execute(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}

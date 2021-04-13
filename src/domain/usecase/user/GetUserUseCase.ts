import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';
import { IGetUserPort } from '../../port/user/IGetUserPort';

export class GetUserUseCase implements IUseCase<IGetUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 조회
   * @param port IGetUserPort
   * @step_1 port로 받아온 id값으로 특정 유저를 조회한다.
   * @returns User
   */
  async execute(port?: IGetUserPort): Promise<User> {
    return this.userRepository.getUserById(port.id);
  }
}

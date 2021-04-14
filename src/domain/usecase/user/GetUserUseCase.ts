import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';
import { IGetUserPort } from '../../port/user/IGetUserPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class GetUserUseCase implements IUseCase<IGetUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 조회
   * @param port IGetUserPort
   * @step_1 port로 받아온 id값으로 특정 유저를 조회한다.
   * @step_2 유저가 undefined라면 예외를 발생시킨다..
   * @returns User
   */
  async execute(port?: IGetUserPort): Promise<User> {
    const user = await this.userRepository.getUserById(port.id);
    if (!user) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 유저' });
    return user;
  }
}

import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { ICreateUserPort } from '../../port/user/ICreateUserPort';

export class CreateUserUseCase implements IUseCase<ICreateUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 생성
   * @param port ICreateUserPort
   * @step_1 port로 받아온 nickname값으로 유저를 조회한다.
   * @step_2 유저가 존재하면 예외를 발생시킨다.
   * @step_3 유저 엔티티를 생성한 후, 저장소에 등록한다.
   * @returns User
   */
  async execute(port?: ICreateUserPort): Promise<User> {
    const userExist = await this.userRepository.getUserByNickname(port.nickname);
    if (userExist) throw Exception.new({ code: Code.CONFLICT, overrideMessage: '닉네임 중복' });
    const user = await User.new(port);
    return this.userRepository.createUser(user);
  }
}

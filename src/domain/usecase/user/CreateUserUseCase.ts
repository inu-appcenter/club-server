import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { ICreateUserPort } from '../../port/user/ICreateUserPort';

export class CreateUserUseCase implements IUseCase<ICreateUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: ICreateUserPort): Promise<User> {
    const userExist = await this.userRepository.getUserByNickname(port.nickname);
    if (userExist) throw Exception.new({ code: Code.CONFLICT, data: port.nickname, overrideMessage: '닉네임 중복' });
    const user = await User.new(port);
    return this.userRepository.createUser(user);
  }
}

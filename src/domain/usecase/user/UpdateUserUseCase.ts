import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IUpdateUserPort } from '@/domain/port/user/IUdateUserPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class UpdateUserUseCase implements IUseCase<IUpdateUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IUpdateUserPort): Promise<void> {
    const [userExist, userConflict] = await Promise.all([
      this.userRepository.getUserById(port.userId),
      this.userRepository.getUserByNickname(port.nickname),
    ]);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    if (userConflict) throw Exception.new({ code: Code.CONFLICT, data: port.nickname, overrideMessage: '닉네임 중복' });
    await userExist.edit(port);
    await this.userRepository.updateUser(userExist);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IRemoveUserPort } from '@/domain/port/user/IRemoveUserPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class RemoveUserUseCase implements IUseCase<IRemoveUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 삭제
   * @param port IRemoveUserPort
   * @step_1 port로 받아온 id값으로 유저를 삭제한다.
   * @returns void
   * todo: 인증 과정이 필요
   */
  async execute(port?: IRemoveUserPort): Promise<void> {
    const userExist = await this.userRepository.getUserById(port.id);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    await this.userRepository.removeUserById(port.id);
  }
}

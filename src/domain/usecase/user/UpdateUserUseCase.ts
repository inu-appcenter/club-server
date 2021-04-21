import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IUpdateUserPort } from '@/domain/port/user/IUdateUserPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class UpdateUserUseCase implements IUseCase<IUpdateUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * 유저 수정
   * @param port IUpdateUserPort
   * @step_1 port로 받아온 id값으로 유저를 조회한다.
   * @step_2 port로 받아온 nickname값으로 유저를 조회한다.
   * @step_3 유저가 없거나, 동일 닉네임의 유저가 존재하면 예외를 발생시킨다.
   * @step_4 유저 엔티티를 수정하고 저장소에 등록한다.
   * @returns void
   */
  async execute(port?: IUpdateUserPort): Promise<void> {
    const [userExist, userConflict] = await Promise.all([
      this.userRepository.getUserById(port.id),
      this.userRepository.getUserByNickname(port.nickname),
    ]);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    if (userConflict && userConflict.getId() !== port.id)
      throw Exception.new({ code: Code.CONFLICT, data: port.nickname, overrideMessage: '닉네임 중복' });
    await userExist.edit(port);
    await this.userRepository.updateUser(userExist);
  }
}

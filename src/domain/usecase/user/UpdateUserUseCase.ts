import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IUpdateUserPort } from '@/domain/port/user/IUdateUserPort';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UpdateUserUseCase implements IUseCase<IUpdateUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IUpdateUserPort): Promise<void> {
    const [userExist, userConflict] = await Promise.all([
      this.userRepository.getUserById(port.userId),
      this.userRepository.getUserByNickname(port.nickname),
    ]);
    if (!userExist) throw new HttpException('유저 없음', HttpStatus.NOT_FOUND);
    if (userConflict) throw new HttpException('닉네임 중복', HttpStatus.CONFLICT);
    await userExist.edit(port);
    await this.userRepository.updateUser(userExist);
  }
}

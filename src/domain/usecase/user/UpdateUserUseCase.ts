import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IUpdateUserPort } from '@/domain/port/user/IUdateUserPort';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UpdateUserUseCase implements IUseCase<IUpdateUserPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IUpdateUserPort): Promise<void> {
    const userExist = await this.userRepository.getUserById(port.userId);
    if (!userExist) throw new HttpException('유저 없음', HttpStatus.NOT_FOUND);
    await userExist.edit(port);
    await this.userRepository.updateUser(userExist);
  }
}

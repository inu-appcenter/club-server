import { IUseCase } from '@/common/usecase/IUseCase';
import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ICreateUserPort } from '../../port/user/ICreateUserPort';

export class CreateUserUseCase implements IUseCase<ICreateUserPort, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: ICreateUserPort): Promise<User> {
    const userExist = await this.userRepository.getUserByNickname(port.nickname);
    if (userExist) throw new HttpException('닉네임 중복', HttpStatus.CONFLICT);
    return this.userRepository.createUser(await User.new(port));
  }
}

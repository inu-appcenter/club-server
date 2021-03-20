import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { User } from '@/domain/entity/User';
import { CreateUserUseCase } from '@/domain/usecase/user/CreateUserUseCase';
import { GetUserListUseCase } from '@/domain/usecase/user/GetUserListUseCase';
import { GetUserUseCase } from '@/domain/usecase/user/GetUserUseCase';
import { RemoveUserUseCase } from '@/domain/usecase/user/RemoveUserUseCase';
import { UpdateUserUseCase } from '@/domain/usecase/user/UpdateUserUseCase';
import { UserProvides } from '@/infrastructure/di/providers/provides/user.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../models/dto/create-user.dto';
import { UpdateUserDTO } from '../models/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserProvides.GET_USER_PROXY_SERVICE)
    private readonly getUserProxyService: UseCaseProxy<GetUserUseCase>,
    @Inject(UserProvides.GET_USER_LIST_PROXY_SERVICE)
    private readonly getUserListProxyService: UseCaseProxy<GetUserListUseCase>,
    @Inject(UserProvides.CREATE_USER_PROXY_SERVICE)
    private readonly createUserProxyService: UseCaseProxy<CreateUserUseCase>,
    @Inject(UserProvides.REMOVE_USER_PROXY_SERVICE)
    private readonly removeUserProxyService: UseCaseProxy<RemoveUserUseCase>,
    @Inject(UserProvides.UPDATE_USER_PROXY_SERVICE)
    private readonly updateUserProxyService: UseCaseProxy<UpdateUserUseCase>,
  ) {}

  async getUser(userId: number): Promise<User> {
    return await this.getUserProxyService.getInstance().execute({ id: userId });
  }

  async getUsers(): Promise<User[]> {
    return await this.getUserListProxyService.getInstance().execute();
  }

  async createUser(createUserDto: CreateUserDTO, studentId: number): Promise<User> {
    const { nickname } = createUserDto;
    return await this.createUserProxyService.getInstance().execute({ nickname, studentId });
  }

  async updateUser(updateUserDto: UpdateUserDTO, userId: number): Promise<void> {
    const { nickname } = updateUserDto;
    await this.updateUserProxyService.getInstance().execute({ nickname, userId });
  }

  async removeUser(userId: number): Promise<void> {
    await this.removeUserProxyService.getInstance().execute({ userId });
  }
}

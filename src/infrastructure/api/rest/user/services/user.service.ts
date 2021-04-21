import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateUserUseCase } from '@/domain/usecase/user/CreateUserUseCase';
import { GetUserListUseCase } from '@/domain/usecase/user/GetUserListUseCase';
import { GetUserUseCase } from '@/domain/usecase/user/GetUserUseCase';
import { RemoveUserUseCase } from '@/domain/usecase/user/RemoveUserUseCase';
import { UpdateUserUseCase } from '@/domain/usecase/user/UpdateUserUseCase';
import { UserProvides } from '@/infrastructure/di/providers/provides/user.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../models/dto/create-user.dto';
import { DeleteUserDTO } from '../models/dto/delete-user.dto';
import { UpdateUserDTO } from '../models/dto/update-user.dto';
import { UserRes } from '../models/res/user.res';

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

  async getUser(userId: number): Promise<UserRes> {
    const user = await this.getUserProxyService.getInstance().execute({ id: userId });
    return new UserRes(user);
  }

  async getUsers(): Promise<UserRes[]> {
    const users = await this.getUserListProxyService.getInstance().execute();
    return users.map((user) => new UserRes(user));
  }

  async createUser(createUserDto: CreateUserDTO, studentId: number): Promise<UserRes> {
    const { nickname } = createUserDto;
    const user = await this.createUserProxyService.getInstance().execute({ nickname, studentId });
    return new UserRes(user);
  }

  async updateUser(updateUserDto: UpdateUserDTO, userId: number): Promise<void> {
    const { nickname } = updateUserDto;
    await this.updateUserProxyService.getInstance().execute({ nickname, id: userId });
  }

  async removeUser(userId: number, deleteUserDto: DeleteUserDTO): Promise<void> {
    // todo: 비밀번호를 입력받아서 무언가 해야함
    await this.removeUserProxyService.getInstance().execute({ id: userId });
  }
}

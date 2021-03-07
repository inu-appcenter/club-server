import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { User } from '@/domain/entity/User';
import { CreateUser } from '@/domain/usecase/user/CreateUser';
import { GetUser } from '@/domain/usecase/user/GetUser';
import { RemoveUser } from '@/domain/usecase/user/RemoveUser';
import { RequestAdmin } from '@/domain/usecase/user/RequestAdmin';
import { UpdateUser } from '@/domain/usecase/user/UpdateUser';
import { UserProvides } from '@/infrastructure/di/providers/provides/user.provide';
import { Inject, Injectable } from '@nestjs/common';
import { GetUserDto } from '../dto/user/get.user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserProvides.GET_USER_PROXY_SERVICE)
    private readonly getUserProxyService: UseCaseProxy<GetUser>,
    @Inject(UserProvides.CREATE_USER_PROXY_SERVICE)
    private readonly createUserProxyService: UseCaseProxy<CreateUser>,
    @Inject(UserProvides.REMOVE_USER_PROXY_SERVICE)
    private readonly removeUserProxyService: UseCaseProxy<RemoveUser>,
    @Inject(UserProvides.REQUEST_ADMIN_PROXY_SERVICE)
    private readonly requestAdminProxyService: UseCaseProxy<RequestAdmin>,
    @Inject(UserProvides.UPDATE_USER_PROXY_SERVICE)
    private readonly updateUserProxyService: UseCaseProxy<UpdateUser>,
  ) {}

  async getUser(getUserDto: GetUserDto): Promise<User> {
    return await this.getUserProxyService.getInstance().execute(getUserDto);
  }
}

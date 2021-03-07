import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateUser } from '@/domain/usecase/user/CreateUser';
import { GetUser } from '@/domain/usecase/user/GetUser';
import { RemoveUser } from '@/domain/usecase/user/RemoveUser';
import { RequestAdmin } from '@/domain/usecase/user/RequestAdmin';
import { UpdateUser } from '@/domain/usecase/user/UpdateUser';
import { Provider } from '@nestjs/common';
import { UserRepository } from '../../repositories/user.repository';
import { UserProvides } from './provides/user.provide';

const GetUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.GET_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new GetUser(userRepository)),
};

const CreateUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.CREATE_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new CreateUser(userRepository)),
};

const UpdateUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.UPDATE_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new UpdateUser(userRepository)),
};

const RemoveUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.REMOVE_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new RemoveUser(userRepository)),
};

const RequestUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.REQUEST_ADMIN_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new RequestAdmin(userRepository)),
};

export const UserProviders = [
  GetUserProvider,
  CreateUserProvider,
  UpdateUserProvider,
  RemoveUserProvider,
  RequestUserProvider,
];

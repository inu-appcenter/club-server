import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateUserUseCase } from '@/domain/usecase/user/CreateUserUseCase';
import { GetUserListUseCase } from '@/domain/usecase/user/GetUserListUseCase';
import { GetUserUseCase } from '@/domain/usecase/user/GetUserUseCase';
import { RemoveUserUseCase } from '@/domain/usecase/user/RemoveUserUseCase';
import { RequestAdminUseCase } from '@/domain/usecase/user/RequestAdminUseCase';
import { UpdateUserUseCase } from '@/domain/usecase/user/UpdateUserUseCase';
import { Provider } from '@nestjs/common';
import { UserRepository } from '../../repositories/user.repository';
import { UserProvides } from './provides/user.provide';

const GetUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.GET_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new GetUserUseCase(userRepository)),
};

const GetUserListProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.GET_USER_LIST_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new GetUserListUseCase(userRepository)),
};

const CreateUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.CREATE_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new CreateUserUseCase(userRepository)),
};

const UpdateUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.UPDATE_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new UpdateUserUseCase(userRepository)),
};

const RemoveUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.REMOVE_USER_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new RemoveUserUseCase(userRepository)),
};

const RequestUserProvider: Provider = {
  inject: [UserRepository],
  provide: UserProvides.REQUEST_ADMIN_PROXY_SERVICE,
  useFactory: (userRepository: UserRepository) => new UseCaseProxy(new RequestAdminUseCase(userRepository)),
};

export const UserProviders = [
  GetUserProvider,
  GetUserListProvider,
  CreateUserProvider,
  UpdateUserProvider,
  RemoveUserProvider,
  RequestUserProvider,
];

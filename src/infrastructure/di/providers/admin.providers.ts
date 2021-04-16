import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateAdminUseCase } from '@/domain/usecase/admin/CreateAdminUseCase';
import { GetAdminListUseCase } from '@/domain/usecase/admin/GetAdminListUseCase';
import { GetAdminUseCase } from '@/domain/usecase/admin/GetAdminUseCase';
import { RegisterAdminUseCase } from '@/domain/usecase/admin/RegsiterAdminUseCase';
import { RemoveAdminUseCase } from '@/domain/usecase/admin/RemoveAdminUseCase';
import { UpdateAdminUseCase } from '@/domain/usecase/admin/UpdateAdminUseCase';
import { AdminRepository } from '@/infrastructure/repositories/admin.repository';
import { Provider } from '@nestjs/common';
import { AdminProvides } from './provides/admin.provide';

const GetAdminProvider: Provider = {
  inject: [AdminRepository],
  provide: AdminProvides.GET_ADMIN_PROXY_SERVICE,
  useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new GetAdminUseCase(adminRepository)),
};

const GetAdminListProvider: Provider = {
  inject: [AdminRepository],
  provide: AdminProvides.GET_ADMIN_LIST_PROXY_SERVICE,
  useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new GetAdminListUseCase(adminRepository)),
};

const CreateAdminProvider: Provider = {
  inject: [AdminRepository],
  provide: AdminProvides.CREATE_ADMIN_PROXY_SERVICE,
  useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new CreateAdminUseCase(adminRepository)),
};

const UpdateAdminProvider: Provider = {
  inject: [AdminRepository],
  provide: AdminProvides.UPDATE_ADMIN_PROXY_SERVICE,
  useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new UpdateAdminUseCase(adminRepository)),
};

const RemoveAdminProvider: Provider = {
  inject: [AdminRepository],
  provide: AdminProvides.REMOVE_ADMIN_PROXY_SERVICE,
  useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new RemoveAdminUseCase(adminRepository)),
};

const RegisterAdminProvider: Provider = {
  inject: [AdminRepository],
  provide: AdminProvides.REGISTER_ADMIN_PROXY_SERVICE,
  useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new RegisterAdminUseCase(adminRepository)),
};

export const AdminProviders = [
  GetAdminProvider,
  GetAdminListProvider,
  CreateAdminProvider,
  UpdateAdminProvider,
  RemoveAdminProvider,
  RegisterAdminProvider,
];

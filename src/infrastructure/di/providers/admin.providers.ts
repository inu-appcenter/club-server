// import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
// import { GetAdminUseCase } from '@/domain/usecase/admin/GetAdminUseCase';
// import { AdminRepository } from '@/infrastructure/repositories/admin.repository';
// import { Provider } from '@nestjs/common';
// import { AdminProvides } from './provides/admin.provide';

// const GetAdminProvider: Provider = {
//   inject: [AdminRepository],
//   provide: AdminProvides.GET_ADMIN_PROXY_SERVICE,
//   useFactory: (adminRepository: AdminRepository) => new UseCaseProxy(new GetAdminUseCase(adminRepository)),
// };

// export const AdminProviders = [GetAdminProvider];

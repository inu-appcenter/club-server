import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CloseGatheringUseCase } from '@/domain/usecase/gathering/CloseGatheringUseCase';
import { CreateGatheringUseCase } from '@/domain/usecase/gathering/CreateGatheringUseCase';
import { DeleteGatheringUseCase } from '@/domain/usecase/gathering/DeleteGatheringUseCase';
import { GetGatheringsUseCase } from '@/domain/usecase/gathering/GetGatheringsUseCase';
import { GetGatheringUseCase } from '@/domain/usecase/gathering/GetGatheringUseCase';
import { GetMyGatheringsUseCase } from '@/domain/usecase/gathering/GetMyGatheringsUseCase';
import { ReportGatheringUseCase } from '@/domain/usecase/gathering/ReportGatheringUseCase';
import { UpdateGatheringUseCase } from '@/domain/usecase/gathering/UpdateGatheringUseCase';
import { CategoryRepository } from '@/infrastructure/repositories/category.repository';
import { GatheringRepository } from '@/infrastructure/repositories/gathering.repository';
import { UserRepository } from '@/infrastructure/repositories/user.repository';
import { Provider } from '@nestjs/common';
import { GatheringProvides } from './provides/gathering.provide';

const CreateGatheringProvider: Provider = {
  inject: [GatheringRepository, UserRepository, CategoryRepository],
  provide: GatheringProvides.CREATE_GATHERING_PROXY_SERVICE,
  useFactory: (
    gatheringRepository: GatheringRepository,
    userRepository: UserRepository,
    categoryRepository: CategoryRepository,
  ) => new UseCaseProxy(new CreateGatheringUseCase(gatheringRepository, userRepository, categoryRepository)),
};

const UpdateGatheringProvider: Provider = {
  inject: [GatheringRepository, UserRepository, CategoryRepository],
  provide: GatheringProvides.UPDATE_GATHERING_PROXY_SERVICE,
  useFactory: (
    gatheringRepository: GatheringRepository,
    userRepository: UserRepository,
    categoryRepository: CategoryRepository,
  ) => new UseCaseProxy(new UpdateGatheringUseCase(gatheringRepository, userRepository, categoryRepository)),
};

const GetGatheringProvider: Provider = {
  inject: [GatheringRepository],
  provide: GatheringProvides.GET_GATHERING_PROXY_SERVICE,
  useFactory: (gatheringRepository: GatheringRepository) =>
    new UseCaseProxy(new GetGatheringUseCase(gatheringRepository)),
};

const GetAllGatheringProvider: Provider = {
  inject: [GatheringRepository],
  provide: GatheringProvides.GET_ALL_GATHERING_PROXY_SERVICE,
  useFactory: (gatheringRepository: GatheringRepository) =>
    new UseCaseProxy(new GetGatheringsUseCase(gatheringRepository)),
};

const GetAllMyGatheringProvider: Provider = {
  inject: [GatheringRepository, UserRepository],
  provide: GatheringProvides.GET_ALL_MY_GATHERING_PROXY_SERVICE,
  useFactory: (gatheringRepository: GatheringRepository, userRepository: UserRepository) =>
    new UseCaseProxy(new GetMyGatheringsUseCase(gatheringRepository, userRepository)),
};

const CloseGatheringProvider: Provider = {
  inject: [GatheringRepository, UserRepository],
  provide: GatheringProvides.CLOSE_GATHERING_PROXY_SERVICE,
  useFactory: (gatheringRepository: GatheringRepository, userRepository: UserRepository) =>
    new UseCaseProxy(new CloseGatheringUseCase(gatheringRepository, userRepository)),
};

const RemoveGatheringProvider: Provider = {
  inject: [GatheringRepository],
  provide: GatheringProvides.REMOVE_GATHERING_PROXY_SERVICE,
  useFactory: (gatheringRepository: GatheringRepository) =>
    new UseCaseProxy(new DeleteGatheringUseCase(gatheringRepository)),
};

const ReportGatheringProvider: Provider = {
  inject: [GatheringRepository],
  provide: GatheringProvides.REPORT_GATHERING_PROXY_SERVICE,
  useFactory: (gatheringRepository: GatheringRepository) =>
    new UseCaseProxy(new ReportGatheringUseCase(gatheringRepository)),
};

// todo: participate in, quit

export const GatheringProviders = [
  CreateGatheringProvider,
  UpdateGatheringProvider,
  GetAllGatheringProvider,
  GetAllMyGatheringProvider,
  GetGatheringProvider,
  CloseGatheringProvider,
  RemoveGatheringProvider,
  ReportGatheringProvider,
];

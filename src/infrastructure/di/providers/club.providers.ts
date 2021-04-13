// import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
// import { ClubRepository } from '@/infrastructure/repositories/club.repository';
// import { Provider } from '@nestjs/common';
// import { ClubProvides } from './provides/club.provide';
// import { CreateClubUseCase } from '@/domain/usecase/club/CreateClubUseCase';

// const CreateClubProvider: Provider = {
//   inject: [ClubRepository],
//   provide: ClubProvides.CREATE_CLUB_PROXY_SERVICE,
//   useFactory: (clubRepository: ClubRepository) => new UseCaseProxy(new CreateClubUseCase(clubRepository)),
// };

// export const ClubProviders = [CreateClubProvider];

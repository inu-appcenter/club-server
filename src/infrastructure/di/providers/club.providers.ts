import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { ClubRepository } from '@/infrastructure/repositories/club.repository';
import { Provider } from '@nestjs/common';
import { ClubProvides } from './provides/club.provide';
import { CreateClubUseCase } from '@/domain/usecase/club/CreateClubUseCase';
import { AdminRepository } from '@/infrastructure/repositories/admin.repository';
import { CategoryRepository } from '@/infrastructure/repositories/category.repository';
import { KeywordRepository } from '@/infrastructure/repositories/keyword.repository';
import { UpdateClubUseCase } from '@/domain/usecase/club/UpdateClubUseCase';
import { GetClubUseCase } from '@/domain/usecase/club/GetClubUseCase';
import { GetClubListUseCase } from '@/domain/usecase/club/GetClubListUseCase';
import { GetClubByCategoryUseCase } from '@/domain/usecase/club/GetClubByCategoryUseCase';
import { SearchClubListUseCase } from '@/domain/usecase/club/searchClubListUseCase';

// ! inject 리스트와 useFactory 파라미터의 순서를 지켜야함!!!!!!!!
const CreateClubProvider: Provider = {
  inject: [ClubRepository, AdminRepository, CategoryRepository, KeywordRepository],
  provide: ClubProvides.CREATE_CLUB_PROXY_SERVICE,
  useFactory: (
    clubRepository: ClubRepository,
    adminRepository: AdminRepository,
    categoryRepository: CategoryRepository,
    keywordRepository: KeywordRepository,
  ) => new UseCaseProxy(new CreateClubUseCase(clubRepository, adminRepository, categoryRepository, keywordRepository)),
};

const UpdateClubProvider: Provider = {
  inject: [ClubRepository, AdminRepository, CategoryRepository, KeywordRepository],
  provide: ClubProvides.UPDATE_CLUB_PROXY_SERVICE,
  useFactory: (
    clubRepository: ClubRepository,
    adminRepository: AdminRepository,
    categoryRepository: CategoryRepository,
    keywordRepository: KeywordRepository,
  ) => new UseCaseProxy(new UpdateClubUseCase(clubRepository, adminRepository, categoryRepository, keywordRepository)),
};

const GetClubProvider: Provider = {
  inject: [ClubRepository],
  provide: ClubProvides.GET_CLUB_PROXY_SERVICE,
  useFactory: (clubRepository: ClubRepository) => new UseCaseProxy(new GetClubUseCase(clubRepository)),
};

const GetAllClubProvider: Provider = {
  inject: [ClubRepository],
  provide: ClubProvides.GET_ALL_CLUB_PROXY_SERVICE,
  useFactory: (clubRepository: ClubRepository) => new UseCaseProxy(new GetClubListUseCase(clubRepository)),
};

const GetAllClubByCategoryProvider: Provider = {
  inject: [ClubRepository, CategoryRepository],
  provide: ClubProvides.GET_ALL_CLUB_CATEGORY_PROXY_SERVICE,
  useFactory: (clubRepository: ClubRepository, categoryRepository: CategoryRepository) =>
    new UseCaseProxy(new GetClubByCategoryUseCase(clubRepository, categoryRepository)),
};

const SearchAllClubProvider: Provider = {
  inject: [ClubRepository],
  provide: ClubProvides.SEARCH_ALL_CLUB_PROXY_SERVICE,
  useFactory: (clubRepository: ClubRepository) => new UseCaseProxy(new SearchClubListUseCase(clubRepository)),
};

export const ClubProviders = [
  CreateClubProvider,
  UpdateClubProvider,
  GetClubProvider,
  GetAllClubProvider,
  GetAllClubByCategoryProvider,
  // GetAllClubByKeywordProvider,
  SearchAllClubProvider,
];

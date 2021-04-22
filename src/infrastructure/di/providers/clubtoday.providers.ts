import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateClubTodayUseCase } from '@/domain/usecase/clubtoday/CreateClubTodayUseCase';
import { DeleteClubTodayUseCase } from '@/domain/usecase/clubtoday/DeleteClubTodayUseCase';
import { GetClubTodayListByClubUseCase } from '@/domain/usecase/clubtoday/GetClubTodayListByClubUseCase';
import { GetClubTodayListUseCase } from '@/domain/usecase/clubtoday/GetClubTodayListUseCase';
import { GetClubTodayUseCase } from '@/domain/usecase/clubtoday/GetClubTodayUseCase';
import { UpdateClubTodayUseCase } from '@/domain/usecase/clubtoday/UpdateClubTodayUseCase';
import { ClubRepository } from '@/infrastructure/repositories/club.repository';
import { ClubTodayRepository } from '@/infrastructure/repositories/clubtoday.repository';
import { Provider } from '@nestjs/common';
import { ClubTodayProvides } from './provides/clubtoday.provide';

const GetClubTodayProvider: Provider = {
  inject: [ClubTodayRepository],
  provide: ClubTodayProvides.GET_CLUB_TODAY_PROXY_SERVICE,
  useFactory: (clubTodayRepository: ClubTodayRepository) =>
    new UseCaseProxy(new GetClubTodayUseCase(clubTodayRepository)),
};

const GetClubTodayListProvider: Provider = {
  inject: [ClubTodayRepository],
  provide: ClubTodayProvides.GET_CLUB_TODAY_LIST_PROXY_SERVICE,
  useFactory: (clubTodayRepository: ClubTodayRepository) =>
    new UseCaseProxy(new GetClubTodayListUseCase(clubTodayRepository)),
};

const GetClubTodayListByClubProvider: Provider = {
  inject: [ClubTodayRepository],
  provide: ClubTodayProvides.GET_CLUB_TODAY_LIST_BY_CLUB_PROXY_SERVICE,
  useFactory: (clubTodayRepository: ClubTodayRepository) =>
    new UseCaseProxy(new GetClubTodayListByClubUseCase(clubTodayRepository)),
};

const CreateClubTodayProvider: Provider = {
  inject: [ClubTodayRepository, ClubRepository],
  provide: ClubTodayProvides.CREATE_CLUB_TODAY_PROXY_SERVICE,
  useFactory: (clubTodayRepository: ClubTodayRepository, clubRepository: ClubRepository) =>
    new UseCaseProxy(new CreateClubTodayUseCase(clubTodayRepository, clubRepository)),
};

const UpdateClubTodayProvider: Provider = {
  inject: [ClubTodayRepository],
  provide: ClubTodayProvides.UPDATE_CLUB_TODAY_PROXY_SERVICE,
  useFactory: (clubTodayRepository: ClubTodayRepository) =>
    new UseCaseProxy(new UpdateClubTodayUseCase(clubTodayRepository)),
};

const RemoveClubTodayProvider: Provider = {
  inject: [ClubTodayRepository],
  provide: ClubTodayProvides.REMOVE_CLUB_TODAY_PROXY_SERVICE,
  useFactory: (clubTodayRepository: ClubTodayRepository) =>
    new UseCaseProxy(new DeleteClubTodayUseCase(clubTodayRepository)),
};

export const ClubTodayProviders = [
  GetClubTodayProvider,
  GetClubTodayListProvider,
  GetClubTodayListByClubProvider,
  CreateClubTodayProvider,
  UpdateClubTodayProvider,
  RemoveClubTodayProvider,
];

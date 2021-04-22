import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { GetClubByCategoryUseCase } from '@/domain/usecase/club/GetClubByCategoryUseCase';
import { SearchClubListUseCase } from '@/domain/usecase/club/searchClubListUseCase';
import { ClubProvides } from '@/infrastructure/di/providers/provides/club.provide';
import { Inject, Injectable } from '@nestjs/common';
import { ClubRes } from '../models/res/club.res';

@Injectable()
export class ClubSearchService {
  constructor(
    @Inject(ClubProvides.GET_ALL_CLUB_CATEGORY_PROXY_SERVICE)
    private readonly getClubsByCategoryProxyService: UseCaseProxy<GetClubByCategoryUseCase>,
    @Inject(ClubProvides.SEARCH_ALL_CLUB_PROXY_SERVICE)
    private readonly SearchClubsProxyService: UseCaseProxy<SearchClubListUseCase>,
  ) {}

  async getClubsByCategory(categoryId: number): Promise<ClubRes[]> {
    const clubs = await this.getClubsByCategoryProxyService.getInstance().execute({ categoryId });
    return clubs.map((club) => new ClubRes(club));
  }

  async searchClubs(query: string): Promise<ClubRes[]> {
    const clubs = await this.SearchClubsProxyService.getInstance().execute({ query });
    return clubs.map((club) => new ClubRes(club));
  }
}

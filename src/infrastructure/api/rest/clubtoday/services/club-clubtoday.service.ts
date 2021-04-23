import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { GetClubTodayListByClubUseCase } from '@/domain/usecase/clubtoday/GetClubTodayListByClubUseCase';
import { ClubTodayProvides } from '@/infrastructure/di/providers/provides/clubtoday.provide';
import { Inject, Injectable } from '@nestjs/common';
import { ClubTodayRes } from '../models/res/clubtoday.res';

@Injectable()
export class ClubTodayByClubService {
  constructor(
    @Inject(ClubTodayProvides.GET_CLUB_TODAY_LIST_BY_CLUB_PROXY_SERVICE)
    private readonly getClubTodayListByClubProxyService: UseCaseProxy<GetClubTodayListByClubUseCase>,
  ) {}

  async getClubTodayListByClubId(clubId: number): Promise<ClubTodayRes[]> {
    const clubTodayList = await this.getClubTodayListByClubProxyService.getInstance().execute({ clubId });
    return clubTodayList.map((clubToday) => new ClubTodayRes(clubToday));
  }
}

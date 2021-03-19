import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { ClubToday } from '@/domain/entity/ClubToday';
import { DeleteClubTodayUseCase } from '@/domain/usecase/clubtoday/DeleteClubTodayUseCase';
import { GetClubTodayListByClubUseCase } from '@/domain/usecase/clubtoday/GetClubTodayListByClubUseCase';
import { GetClubTodayListUseCase } from '@/domain/usecase/clubtoday/GetClubTodayListUseCase';
import { GetClubTodayUseCase } from '@/domain/usecase/clubtoday/GetClubTodayUseCase';
import { ClubTodayProvides } from '@/infrastructure/di/providers/provides/clubtoday.provide';
import { OrmClub } from '@/infrastructure/repositories/entities/club.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ClubTodayService {
  constructor(
    @Inject(ClubTodayProvides.GET_CLUB_TODAY_PROXY_SERVICE)
    private readonly getClubTodayProxyService: UseCaseProxy<GetClubTodayUseCase>,
    @Inject(ClubTodayProvides.GET_CLUB_TODAY_LIST_PROXY_SERVICE)
    private readonly getClubTodayListProxyService: UseCaseProxy<GetClubTodayListUseCase>,
    @Inject(ClubTodayProvides.GET_CLUB_TODAY_LIST_BY_CLUB_PROXY_SERVICE)
    private readonly getClubTodayListByClubProxyService: UseCaseProxy<GetClubTodayListByClubUseCase>,
    @Inject(ClubTodayProvides.REMOVE_CLUB_TODAY_PROXY_SERVICE)
    private readonly removeClubTodayProxyService: UseCaseProxy<DeleteClubTodayUseCase>,
  ) {}

  async getClubTodayList(): Promise<ClubToday[]> {
    return await this.getClubTodayListProxyService.getInstance().execute();
  }

  async getClubTodayListByClubId(clubId: number): Promise<ClubToday[]> {
    return await this.getClubTodayListByClubProxyService.getInstance().execute({ clubId });
  }

  // ! 설계를 깨부숨
  async getClubNameByClubId(clubId: number): Promise<string> {
    const club = await OrmClub.findOne(clubId);
    return club.clubName;
  }
}

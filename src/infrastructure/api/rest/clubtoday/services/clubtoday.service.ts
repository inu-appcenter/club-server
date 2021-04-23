import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateClubTodayUseCase } from '@/domain/usecase/clubtoday/CreateClubTodayUseCase';
import { DeleteClubTodayUseCase } from '@/domain/usecase/clubtoday/DeleteClubTodayUseCase';
import { GetClubTodayListUseCase } from '@/domain/usecase/clubtoday/GetClubTodayListUseCase';
import { GetClubTodayUseCase } from '@/domain/usecase/clubtoday/GetClubTodayUseCase';
import { UpdateClubTodayUseCase } from '@/domain/usecase/clubtoday/UpdateClubTodayUseCase';
import { ClubTodayProvides } from '@/infrastructure/di/providers/provides/clubtoday.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateClubTodayDTO } from '../models/dto/create-clubtoday.dto';
import { UpdateClubTodayDTO } from '../models/dto/update-clubtoday.dto';
import { ClubTodayRes } from '../models/res/clubtoday.res';

@Injectable()
export class ClubTodayService {
  constructor(
    @Inject(ClubTodayProvides.GET_CLUB_TODAY_PROXY_SERVICE)
    private readonly getClubTodayProxyService: UseCaseProxy<GetClubTodayUseCase>,
    @Inject(ClubTodayProvides.GET_CLUB_TODAY_LIST_PROXY_SERVICE)
    private readonly getClubTodayListProxyService: UseCaseProxy<GetClubTodayListUseCase>,
    @Inject(ClubTodayProvides.CREATE_CLUB_TODAY_PROXY_SERVICE)
    private readonly createClubTodayProxyService: UseCaseProxy<CreateClubTodayUseCase>,
    @Inject(ClubTodayProvides.UPDATE_CLUB_TODAY_PROXY_SERVICE)
    private readonly updateClubTodayProxyService: UseCaseProxy<UpdateClubTodayUseCase>,
    @Inject(ClubTodayProvides.REMOVE_CLUB_TODAY_PROXY_SERVICE)
    private readonly removeClubTodayProxyService: UseCaseProxy<DeleteClubTodayUseCase>,
  ) {}
  async getClubTodayList(): Promise<ClubTodayRes[]> {
    const clubTodayList = await this.getClubTodayListProxyService.getInstance().execute();
    return clubTodayList.map((clubToday) => new ClubTodayRes(clubToday));
  }

  async getClubTodayById(clubTodayId: number): Promise<ClubTodayRes> {
    const clubToday = await this.getClubTodayProxyService.getInstance().execute({ id: clubTodayId });
    return new ClubTodayRes(clubToday);
  }

  async createClubToday(
    adminId: number,
    clubId: number,
    createClubTodayDto: CreateClubTodayDTO,
  ): Promise<ClubTodayRes> {
    const clubToday = await this.createClubTodayProxyService.getInstance().execute({
      adminId,
      clubId,
      ...createClubTodayDto,
    });
    return new ClubTodayRes(clubToday);
  }

  async updateClubTodayById(clubTodayId: number, updateClubTodayDto: UpdateClubTodayDTO): Promise<void> {
    await this.updateClubTodayProxyService.getInstance().execute({
      id: clubTodayId,
      ...updateClubTodayDto,
    });
  }

  async removeClubTodayById(clubTodayId: number): Promise<void> {
    await this.removeClubTodayProxyService.getInstance().execute({ id: clubTodayId });
  }
}

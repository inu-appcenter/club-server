import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { ICreateApplicationInfoPort } from '@/domain/port/applicationInfo/ICreateApplicationInfoPort';
import { IUpdateApplicationInfoPort } from '@/domain/port/applicationInfo/IUpdateApplicationInfoPort';
import { CreateClubUseCase } from '@/domain/usecase/club/CreateClubUseCase';
import { GetClubListUseCase } from '@/domain/usecase/club/GetClubListUseCase';
import { GetClubUseCase } from '@/domain/usecase/club/GetClubUseCase';
import { UpdateClubUseCase } from '@/domain/usecase/club/UpdateClubUseCase';
import { ClubProvides } from '@/infrastructure/di/providers/provides/club.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateClubDTO } from '../models/dto/create-club.dto';
import { UpdateClubDTO } from '../models/dto/update-club.dto';
import { ClubRes } from '../models/res/club.res';

@Injectable()
export class ClubService {
  constructor(
    @Inject(ClubProvides.CREATE_CLUB_PROXY_SERVICE)
    private readonly createClubProxyService: UseCaseProxy<CreateClubUseCase>,
    @Inject(ClubProvides.UPDATE_CLUB_PROXY_SERVICE)
    private readonly updateClubProxyService: UseCaseProxy<UpdateClubUseCase>,
    @Inject(ClubProvides.GET_ALL_CLUB_PROXY_SERVICE)
    private readonly getClubsProxyService: UseCaseProxy<GetClubListUseCase>,
    @Inject(ClubProvides.GET_CLUB_PROXY_SERVICE)
    private readonly getClubProxyService: UseCaseProxy<GetClubUseCase>,
  ) {}

  async getClubById(clubId: number): Promise<ClubRes> {
    const club = await this.getClubProxyService.getInstance().execute({ id: clubId });
    return new ClubRes(club);
  }

  async getClubs(): Promise<ClubRes[]> {
    const clubs = await this.getClubsProxyService.getInstance().execute();
    return clubs.map((club) => new ClubRes(club));
  }

  async createClub(createClubDto: CreateClubDTO, adminId: number) {
    const applicationInfoPort: ICreateApplicationInfoPort = { ...createClubDto };
    const keywords = createClubDto.keywords.split(',');
    return await this.createClubProxyService.getInstance().execute({
      ...createClubDto,
      adminId,
      applicationInfoPort,
      keywords,
    });
  }

  async updateClub(updateClubDto: UpdateClubDTO, clubId: number, adminId: number) {
    const applicationInfoPort: IUpdateApplicationInfoPort = { ...updateClubDto };
    const keywords = updateClubDto.keywords.split(',');
    return await this.updateClubProxyService.getInstance().execute({
      ...updateClubDto,
      id: clubId,
      adminId,
      applicationInfoPort,
      keywords,
    });
  }
}

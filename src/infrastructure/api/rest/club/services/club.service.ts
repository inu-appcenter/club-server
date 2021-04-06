import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { GetAdminUseCase } from '@/domain/usecase/admin/GetAdminUseCase';
import { CreateClubUseCase } from '@/domain/usecase/club/CreateClubUseCase';
import { AdminProvides } from '@/infrastructure/di/providers/provides/admin.provide';
import { ClubProvides } from '@/infrastructure/di/providers/provides/club.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateClubDTO } from '../models/dto/create-club.dto';

@Injectable()
export class ClubService {
  constructor(
    @Inject(AdminProvides.GET_ADMIN_PROXY_SERVICE)
    private readonly getAdminProxyService: UseCaseProxy<GetAdminUseCase>,
    @Inject(ClubProvides.CREATE_CLUB_PROXY_SERVICE)
    private readonly createClubProxyService: UseCaseProxy<CreateClubUseCase>,
  ) {}

  async createClub(createClubDto: CreateClubDTO, adminId: number) {
    const admin = await this.getAdminProxyService.getInstance().execute({ id: adminId });
    // await this.createClubProxyService.getInstance().execute()
    return;
  }
}

import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CloseGatheringUseCase } from '@/domain/usecase/gathering/CloseGatheringUseCase';
import { CreateGatheringUseCase } from '@/domain/usecase/gathering/CreateGatheringUseCase';
import { DeleteGatheringUseCase } from '@/domain/usecase/gathering/DeleteGatheringUseCase';
import { GetGatheringsUseCase } from '@/domain/usecase/gathering/GetGatheringsUseCase';
import { GetGatheringUseCase } from '@/domain/usecase/gathering/GetGatheringUseCase';
import { GetMyGatheringsUseCase } from '@/domain/usecase/gathering/GetMyGatheringsUseCase';
import { ReportGatheringUseCase } from '@/domain/usecase/gathering/ReportGatheringUseCase';
import { UpdateGatheringUseCase } from '@/domain/usecase/gathering/UpdateGatheringUseCase';
import { GatheringProvides } from '@/infrastructure/di/providers/provides/gathering.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateGatheringDTO } from '../models/dto/create-gathering.dto';
import { UpdateGatheringDTO } from '../models/dto/update-gathering.dto';
import { GatheringRes } from '../models/res/gathering.res';

@Injectable()
export class GatheringsService {
  constructor(
    @Inject(GatheringProvides.CREATE_GATHERING_PROXY_SERVICE)
    private readonly createGatheringProxyService: UseCaseProxy<CreateGatheringUseCase>,
    @Inject(GatheringProvides.GET_ALL_GATHERING_PROXY_SERVICE)
    private readonly getAllGatheringProxyService: UseCaseProxy<GetGatheringsUseCase>,
    @Inject(GatheringProvides.GET_ALL_MY_GATHERING_PROXY_SERVICE)
    private readonly getAllMyGatheringProxyService: UseCaseProxy<GetMyGatheringsUseCase>,
    @Inject(GatheringProvides.CLOSE_GATHERING_PROXY_SERVICE)
    private readonly closeGatheringProxyService: UseCaseProxy<CloseGatheringUseCase>,
    @Inject(GatheringProvides.GET_GATHERING_PROXY_SERVICE)
    private readonly getGatheringProxyService: UseCaseProxy<GetGatheringUseCase>,
    @Inject(GatheringProvides.REMOVE_GATHERING_PROXY_SERVICE)
    private readonly removeGatheringProxyService: UseCaseProxy<DeleteGatheringUseCase>,
    @Inject(GatheringProvides.UPDATE_GATHERING_PROXY_SERVICE)
    private readonly updateGatheringProxyService: UseCaseProxy<UpdateGatheringUseCase>,
    @Inject(GatheringProvides.REPORT_GATHERING_PROXY_SERVICE)
    private readonly reportGatheringProxyService: UseCaseProxy<ReportGatheringUseCase>,
  ) {}

  async createGathering(createGatheringDto: CreateGatheringDTO, userId: number): Promise<GatheringRes> {
    const gathering = await this.createGatheringProxyService.getInstance().execute({ ...createGatheringDto, userId });
    return new GatheringRes(gathering);
  }

  async getGatheringById(gatheringId: number): Promise<GatheringRes> {
    const gathering = await this.getGatheringProxyService.getInstance().execute({ id: gatheringId });
    return new GatheringRes(gathering);
  }

  async geGatheringList(): Promise<GatheringRes[]> {
    const gatheringList = await this.getAllGatheringProxyService.getInstance().execute();
    return gatheringList.map((gathering) => new GatheringRes(gathering));
  }

  async getMyGatheringList(userId: number): Promise<GatheringRes[]> {
    const gatheringList = await this.getAllMyGatheringProxyService.getInstance().execute({ userId });
    return gatheringList.map((gathering) => new GatheringRes(gathering));
  }

  async updateGathering(updateGatheringDto: UpdateGatheringDTO, gatheringId: number, userId: number): Promise<void> {
    await this.updateGatheringProxyService.getInstance().execute({
      ...updateGatheringDto,
      id: gatheringId,
      userId,
    });
  }

  async closeGatheringById(gatheringId: number, userId: number): Promise<void> {
    await this.closeGatheringProxyService.getInstance().execute({ id: gatheringId, userId });
  }

  async removeGatheringById(gatheringId: number, userId: number): Promise<void> {
    await this.removeGatheringProxyService.getInstance().execute({ id: gatheringId, userId });
  }

  async reportGatheringById(gatheringId: number): Promise<void> {
    await this.reportGatheringProxyService.getInstance().execute({ id: gatheringId });
  }
}

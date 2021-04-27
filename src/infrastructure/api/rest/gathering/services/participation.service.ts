import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { ParticipateInGatheringUseCase } from '@/domain/usecase/gathering/ParticipateInGatheringUseCase';
import { QuitGatheringUseCase } from '@/domain/usecase/gathering/QuitGatheringUseCase';
import { GatheringProvides } from '@/infrastructure/di/providers/provides/gathering.provide';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ParticipationService {
  constructor(
    @Inject(GatheringProvides.PARTICIPATE_IN_GATHERING_PROXY_SERVICE)
    private readonly participateInGatheringProxyService: UseCaseProxy<ParticipateInGatheringUseCase>,
    @Inject(GatheringProvides.QUIT_GATHERING_PROXY_SERVICE)
    private readonly quitGatheringProxyService: UseCaseProxy<QuitGatheringUseCase>,
  ) {}

  async participateInGathering(gatheringId: number, userId: number): Promise<void> {
    await this.participateInGatheringProxyService.getInstance().execute({ id: gatheringId, userId });
  }

  async quitGatheringById(gatheringId: number, userId: number): Promise<void> {
    await this.quitGatheringProxyService.getInstance().execute({ id: gatheringId, userId });
  }
}

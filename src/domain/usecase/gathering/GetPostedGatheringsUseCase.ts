import { IUseCase } from '@/common/usecase/IUseCase';
import { Gathering } from '@/domain/entity/Gathering';
import { IGetPostedGatheringPort } from '@/domain/port/gathering/IGetPostedGatheringsPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';

export class GetPostedGatheringsUseCase implements IUseCase<IGetPostedGatheringPort, Gathering[]> {
  constructor(private readonly gatheringRepository: IGatheringRepository) {}

  async execute(port?: IGetPostedGatheringPort): Promise<Gathering[]> {
    const { userId } = port;
    return await this.gatheringRepository.getPostedGatheringsByUserId(userId);
  }
}

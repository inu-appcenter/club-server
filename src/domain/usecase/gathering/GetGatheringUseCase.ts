import { IUseCase } from '@/common/usecase/IUseCase';
import { Gathering } from '@/domain/entity/Gathering';
import { IGetGatheringPort } from '@/domain/port/gathering/IGetGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';

export class GetGatheringUseCase implements IUseCase<IGetGatheringPort, Gathering> {
  constructor(private readonly gatheringRepository: IGatheringRepository) {}

  /**
   * 소모임 상세 조회
   */
  async execute(port?: IGetGatheringPort): Promise<Gathering> {
    return await this.gatheringRepository.getGatheringById(port.id);
  }
}

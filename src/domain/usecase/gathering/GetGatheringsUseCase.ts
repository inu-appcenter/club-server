import { IUseCase } from '@/common/usecase/IUseCase';
import { Gathering } from '@/domain/entity/Gathering';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';

export class GetGatheringsUseCase implements IUseCase<any, Gathering[]> {
  constructor(private readonly gatheringRepository: IGatheringRepository) {}

  /**
   * 모집 중인 소모임 조회
   */
  async execute(): Promise<Gathering[]> {
    // isClosed가 false면 모집 중인 소모임
    return this.gatheringRepository.getGatherings(false);
  }
}

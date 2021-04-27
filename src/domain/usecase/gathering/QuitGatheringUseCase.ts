import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IQuitGatheringPort } from '@/domain/port/gathering/IQuitGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';

export class QuitGatheringUseCase implements IUseCase<IQuitGatheringPort, void> {
  constructor(private readonly gatheringRepository: IGatheringRepository) {}

  async execute(port?: IQuitGatheringPort): Promise<void> {
    const gatheringExist = await this.gatheringRepository.getMyGatheringById(port.userId, port.id);
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '참여하지 않은 소모임' });

    await this.gatheringRepository.quitGathering(port.id, port.userId);
  }
}

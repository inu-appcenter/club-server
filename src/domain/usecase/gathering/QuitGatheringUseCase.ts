import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IQuitGatheringPort } from '@/domain/port/gathering/IQuitGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class QuitGatheringUseCase implements IUseCase<IQuitGatheringPort, void> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(port?: IQuitGatheringPort): Promise<void> {
    const userExist = await this.userRepository.getUserById(port.userId);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    const gatheringExist = await this.gatheringRepository.getMyGatheringById(port.userId, port.id);
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '참여하지 않은 소모임' });

    await this.gatheringRepository.quitGathering(port.id, port.userId);
  }
}

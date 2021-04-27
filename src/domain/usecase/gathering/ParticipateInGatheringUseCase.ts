import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IParticipateInGatheringPort } from '@/domain/port/gathering/IParticipateInGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class ParticipateInGatheringUseCase implements IUseCase<IParticipateInGatheringPort, void> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  /**
   * 소모임에 참여
   * @param port IParticipateInGatheringPort
   * @step_1 사용자, 소모임이 존재하는지 확인한다.
   * @step_2 소모임에 참여한다.
   */
  async execute(port?: IParticipateInGatheringPort): Promise<void> {
    const [userExist, gatheringExist] = await Promise.all([
      this.userRepository.getUserById(port.userId),
      this.gatheringRepository.getGatheringById(port.id),
    ]);

    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 사용자' });
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 소모임' });
    if (gatheringExist.isClosed()) throw Exception.new({ code: Code.BAD_REQUEST, overrideMessage: '마감' });
    if (gatheringExist.getUserId() === port.userId)
      throw Exception.new({ code: Code.BAD_REQUEST, overrideMessage: '작성자 참여 불가' });

    await this.gatheringRepository.participateInGathering(port.id, port.userId);
  }
}

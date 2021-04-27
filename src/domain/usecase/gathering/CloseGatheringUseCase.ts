import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ICloseGatheringPort } from '@/domain/port/gathering/ICloseGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class CloseGatheringUseCase implements IUseCase<ICloseGatheringPort, void> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  /**
   * 소모임 강제 마감
   * @param port ICloseGatheringPort
   * @step_1 작성자를 확인한다.
   * @step_2 소모임을 강제로 마감시킨다.
   */
  async execute(port?: ICloseGatheringPort): Promise<void> {
    const [userExist, gatheringExist] = await Promise.all([
      this.userRepository.getUserById(port.userId),
      this.gatheringRepository.getGatheringById(port.id),
    ]);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 소모임' });
    if (gatheringExist.getUserId() !== port.userId)
      throw Exception.new({ code: Code.UNAUTHORIZED, overrideMessage: '권한 없음' });
    await this.gatheringRepository.closeGatheringById(port.id);
  }
}

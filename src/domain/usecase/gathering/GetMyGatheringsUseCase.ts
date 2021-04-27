import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Gathering } from '@/domain/entity/Gathering';
import { IGetMyGatheringsPort } from '@/domain/port/gathering/IGetMyGatheringsPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class GetMyGatheringsUseCase implements IUseCase<IGetMyGatheringsPort, Gathering[]> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  /**
   * 내가 참여한 소모임 조회
   * @param port IGetMyGatheringsPort
   * @step_1 사용자가 존재하는지 확인한다.
   * @step_2 사용자가 참여한 소모임들을 조회한다.
   */
  async execute(port?: IGetMyGatheringsPort): Promise<Gathering[]> {
    const { userId } = port;
    const userExist = await this.userRepository.getUserById(userId);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    return this.gatheringRepository.getMyGatherings(userId);
  }
}

import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IDeleteGatheringPort } from '@/domain/port/gathering/IDeleteGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class DeleteGatheringUseCase implements IUseCase<IDeleteGatheringPort, void> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  /**
   * 소모임 게시글 삭제
   * @param port IDeleteGatheringPort
   * @step_1 소모임이 존재하는지 확인한다.
   * @step_2 소모임 작성자가 본인인지 확인한다.
   * @step_3 소모임을 저장소에서 삭제한다.
   */
  async execute(port?: IDeleteGatheringPort): Promise<void> {
    const { id, userId } = port;
    const gatheringExist = await this.gatheringRepository.getGatheringById(id);
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 소모임' });
    if (gatheringExist.getUserId() !== userId)
      throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '권한 없음' });
    await this.gatheringRepository.deleteGatheringById(id);
  }
}

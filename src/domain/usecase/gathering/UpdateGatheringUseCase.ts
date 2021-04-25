import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateGatheringPort } from '@/domain/port/gathering/IUpdateGatheringPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class UpdateGatheringUseCase implements IUseCase<IUpdateGatheringPort, void> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  /**
   * 소모임 수정
   * @param port IUpdateGatheringPort
   * @step_1 사용자, 카테고리, 소모임이 존재하는지 확인한다.
   * @step_2 소모임 엔티티를 수정한다.
   * @step_3 소모임 저장소에 등록한다.
   */
  async execute(port?: IUpdateGatheringPort): Promise<void> {
    const [userExist, categoryExist, gatheringExist] = await Promise.all([
      this.userRepository.getUserById(port.userId),
      this.categoryRepository.getCategoryById(port.categoryId),
      this.gatheringRepository.getGatheringById(port.id),
    ]);

    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 사용자' });
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 카테고리' });
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 소모임' });

    await gatheringExist.edit(port);
    await this.gatheringRepository.updateGathering(gatheringExist);
  }
}

import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Gathering } from '@/domain/entity/Gathering';
import { ICreateGatheringPort } from '@/domain/port/gathering/ICreateGatheringPort';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';
import { IUserRepository } from '@/domain/repository/IUserRepository';

export class CreateGatheringUseCase implements IUseCase<ICreateGatheringPort, Gathering> {
  constructor(
    private readonly gatheringRepository: IGatheringRepository,
    private readonly userRepository: IUserRepository,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  /**
   * 소모임 게시글 생성
   * @param port ICreateGatheringPort
   * @step_1 사용자와 카테고리가 존재하는지 확인한다.
   * @step_2 소모임 엔티티를 생성한다.
   * @step_3 소모임 저장소에 게시글을 저장한다.
   */
  async execute(port?: ICreateGatheringPort): Promise<Gathering> {
    const { userId, categoryId } = port;
    const [userExist, categoryExist] = await Promise.all([
      this.userRepository.getUserById(userId),
      this.categoryRepository.getCategoryById(categoryId),
    ]);
    if (!userExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '사용자 없음' });
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 카테고리' });

    const gathering = await Gathering.new(port);
    return await this.gatheringRepository.createGathering(gathering);
  }
}

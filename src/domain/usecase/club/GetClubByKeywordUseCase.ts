import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubByKeywordPort } from '@/domain/port/club/IGetClubByKeywordPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubByKeywordUseCase implements IUseCase<IGetClubByKeywordPort, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}

  /**
   * todo: 키워드 usecase
   * 키워드별 동아리 조회
   * @param port IGetClubByKeywordPort
   * @step_1 port에서 받아온 keyword값으로 동아리를 조회한다.
   * @returns Club[]
   */
  execute(port?: IGetClubByKeywordPort): Promise<Club[]> {
    return this.clubRepository.getClubsByKeyword(port.keyword);
  }
}

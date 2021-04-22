import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { ISearchClubPort } from '@/domain/port/club/ISearchClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import _ from 'lodash';

export class SearchClubListUseCase implements IUseCase<ISearchClubPort, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}

  /**
   * 동아리 검색
   * @param port ISearchClubPort
   * @step_1 port에서 받아온 query 값으로 동아리 이름 또는 키워드로 조회한다.
   * @step_2 검색된 동아리들의 중복을 제거한다.
   * @returns Club[]
   */
  async execute(port?: ISearchClubPort): Promise<Club[]> {
    const select = await Promise.all([
      this.clubRepository.getClubByClubName(port.query),
      this.clubRepository.getClubsByKeyword(port.query),
    ]);
    const clubs = _.uniqBy(
      select.flat().filter((e) => e),
      'id',
    );
    // const frumpishClubs = select
    //   .flat(1)
    //   .map((e) => JSON.stringify(e))
    //   .map((e) => JSON.parse(e));
    // const clubs = Array.from(new Set(frumpishClubs));
    return clubs.filter((club) => club);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubPort } from '@/domain/port/club/IGetClubPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class GetClubUseCase implements IUseCase<IGetClubPort, Club> {
  constructor(private readonly clubRepository: IClubRepository) {}

  /**
   * 동아리 조회
   * @param port IGetClubPort
   * @step_1 port에서 받아온 id값으로 특정 동아리를 조회한다.
   * @returns Club
   */
  execute(port?: IGetClubPort): Promise<Club> {
    return this.clubRepository.getClubById(port.id);
  }
}

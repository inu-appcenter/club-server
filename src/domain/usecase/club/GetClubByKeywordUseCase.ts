import { IUseCase } from '@/common/usecase/IUseCase';
import { Club } from '@/domain/entity/Club';
import { IGetClubByKeywordPort } from '@/domain/port/club/IGetClubByKeywordPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';

// todo: 키워드는 좀만 기다려라~
export class GetClubByKeywordUseCase implements IUseCase<IGetClubByKeywordPort, Club[]> {
  constructor(private readonly clubRepository: IClubRepository) {}

  execute(port?: IGetClubByKeywordPort): Promise<Club[]> {
    return this.clubRepository.getClubsByKeyword(port.keyword);
  }
}

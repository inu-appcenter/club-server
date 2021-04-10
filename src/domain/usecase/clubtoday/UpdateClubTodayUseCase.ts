import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateClubTodayPort } from '@/domain/port/clubtoday/IUpdateClubTodayPort';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';
import { IImageRepository } from '@/domain/repository/IImageRepository';

export class UpdateClubTodayUseCase implements IUseCase<IUpdateClubTodayPort, void> {
  constructor(private imageRepository: IImageRepository, private clubTodayRepository: IClubTodayRepository) {}

  async execute(port?: IUpdateClubTodayPort): Promise<void> {
    const [clubTodayExist, headerImage] = await Promise.all([
      this.clubTodayRepository.getClubTodayById(port.id),
      this.imageRepository.getImageById(port.headerImageId),
    ]);

    if (!clubTodayExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '클럽투데이 없음' });

    await clubTodayExist.edit({
      headerImage,
      ...port,
    });
    await this.clubTodayRepository.updateClubToday(clubTodayExist);
  }
}

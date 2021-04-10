import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubToday } from '@/domain/entity/ClubToday';
import { ICreateClubTodayPort } from '@/domain/port/clubtoday/ICreateClubTodayPort';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IClubTodayRepository } from '@/domain/repository/IClubTodayRepository';
import { IImageRepository } from '@/domain/repository/IImageRepository';

export class CreateClubTodayUseCase implements IUseCase<ICreateClubTodayPort, ClubToday> {
  constructor(
    private readonly clubTodayRepository: IClubTodayRepository,
    private readonly imageRepository: IImageRepository,
    private readonly clubRepository: IClubRepository,
  ) {}

  async execute(port?: ICreateClubTodayPort): Promise<ClubToday> {
    const [headerImage, club] = await Promise.all([
      this.imageRepository.getImageById(port.headerImageId),
      this.clubRepository.getClubByIdAndAdminId(port.clubId, port.adminId),
    ]);

    if (!club) throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '클럽이 없거나 관리자가 없음' });
    const latelyDate = await this.clubTodayRepository.getLatelyDateByClubId(club.id);
    // todo: 날짜 비교
    if (false) {
      // 최근 날짜와 오늘 날짜가 같을 때
      throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '하루에 하나만 작성 가능' });
    }

    const clubToday = await ClubToday.new({
      headerImage,
      club,
      ...port,
    });
    return this.clubTodayRepository.createClubToday(clubToday);
  }
}

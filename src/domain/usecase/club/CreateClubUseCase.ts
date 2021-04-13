import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { ClubImage } from '@/domain/entity/ClubImage';
import { ICreateClubPort } from '@/domain/port/club/ICreateClubPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class CreateClubUseCase implements IUseCase<ICreateClubPort, Club> {
  constructor(
    private readonly clubRepository: IClubRepository,
    private readonly adminRepository: IAdminRepository,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  /**
   * 동아리 생성
   * @param port ICreateClubPort
   * @step_1 port로 받은 clubName, adminId, categoryId로 각 요소들이 존재하는지 확인한다.
   * @step_2 같은 이름으로 동아리가 존재할 경우, 예외를 발생시킨다.
   * @step_3 동아리 생성에 필요한 엔티티를 생성한다.
   * @step_4 관련된 엔티티를 가지고 동아리 엔티티를 생성 후, 저장소에 등록한다. (transaction)
   * @returns Club
   */
  async execute(port?: ICreateClubPort): Promise<Club> {
    const [clubExist, admin, category] = await Promise.all([
      this.clubRepository.getClubsByName(port.clubName),
      this.adminRepository.getAdminById(port.adminId),
      this.categoryRepository.getCategoryById(port.categoryId),
    ]);

    if (clubExist)
      throw Exception.new({ code: Code.CONFLICT, data: port.clubName, overrideMessage: '동아리 이름 중복' });

    const applicationInfo = await ApplicationInfo.new(port.applicationInfoPort);
    const images = await Promise.all(port.imageUrls.map((url) => ClubImage.new({ url })));
    const club = await Club.new({ admin, applicationInfo, category, images, ...port });
    return this.clubRepository.createClub(club);
  }
}

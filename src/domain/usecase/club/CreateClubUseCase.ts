import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { ICreateClubPort } from '@/domain/port/club/ICreateClubPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IImageRepository } from '@/domain/repository/IImageRepository';

export class CreateClubUseCase implements IUseCase<ICreateClubPort, Club> {
  constructor(
    private readonly clubRepository: IClubRepository,
    private readonly adminRepository: IAdminRepository,
    private readonly imageRepository: IImageRepository,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(port?: ICreateClubPort): Promise<Club> {
    const [clubExist, admin, images, category] = await Promise.all([
      this.clubRepository.getClubsByName(port.clubName),
      this.adminRepository.getAdminById(port.adminId),
      Promise.all(port.imageIds.map((id) => this.imageRepository.getImageById(id))),
      this.categoryRepository.getCategoryById(port.categoryId),
    ]);

    if (clubExist)
      throw Exception.new({ code: Code.CONFLICT, data: port.clubName, overrideMessage: '동아리 이름 중복' });

    const applicationInfo = await ApplicationInfo.new(port.applicationInfoPort);
    const club = await Club.new({ admin, applicationInfo, category, images, ...port });
    return this.clubRepository.createClub(club);
  }
}

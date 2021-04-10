import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateClubPort } from '@/domain/port/club/IUpdateClubPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { IApplicationInfoRepository } from '@/domain/repository/IApplicationInfoRepository';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IImageRepository } from '@/domain/repository/IImageRepository';

export class UpdateClubUseCase implements IUseCase<IUpdateClubPort, void> {
  constructor(
    private readonly clubRepository: IClubRepository,
    private readonly adminRepository: IAdminRepository,
    private readonly imageRepository: IImageRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly applicationInfoRepository: IApplicationInfoRepository,
  ) {}

  async execute(port?: IUpdateClubPort): Promise<void> {
    const [clubExist, admin, images, applicationInfo, category] = await Promise.all([
      this.clubRepository.getClubById(port.id),
      this.adminRepository.getAdminById(port.adminId),
      Promise.all(port.imageIds.map((id) => this.imageRepository.getImageById(id))),
      this.applicationInfoRepository.getApplicationInfoById(port.applicationInfoId),
      this.categoryRepository.getCategoryById(port.categoryId),
    ]);

    if (!clubExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '동아리 없음' });
    if (!admin) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '관리자 없음' });
    if (images.length == 0) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '이미지 없음' });
    if (!applicationInfo) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '지원 정보 없음' });
    if (!category) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '카테고리 없음' });

    if (port.clubName && (await this.clubRepository.getClubsByName(port.clubName)))
      throw Exception.new({ code: Code.CONFLICT, data: port.clubName, overrideMessage: '동아리 이름 중복' });

    await clubExist.edit({
      applicationInfo,
      category,
      admin,
      images,
      ...port,
    });
    await this.clubRepository.updateClub(clubExist);
  }
}

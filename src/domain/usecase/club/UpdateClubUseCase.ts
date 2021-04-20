import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ClubImage } from '@/domain/entity/ClubImage';
import { Keyword } from '@/domain/entity/Keyword';
import { IUpdateClubPort } from '@/domain/port/club/IUpdateClubPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IClubImageRepository } from '@/domain/repository/IImageRepository';
import { IKeywordRepository } from '@/domain/repository/IKeywordRepository';

export class UpdateClubUseCase implements IUseCase<IUpdateClubPort, void> {
  constructor(
    private readonly clubRepository: IClubRepository,
    private readonly adminRepository: IAdminRepository,
    private readonly clubImageRepository: IClubImageRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly keywordRepository: IKeywordRepository,
  ) {}

  /**
   * 동아리 수정 (관리자는 변하지 않음)
   * @param port IUpdateClubPort
   * @step_1 port로 받아온 id, adminId, categoryId, applicationInfoPort.id 값으로 관계된 데이터를 조회한다.
   * @step_2 동아리가 존재하지 않을 때 예외를 발생시킨다.
   * @step_3 port로 받아온 clubName이 있고, 저장소에도 존재하면 예외를 발생시킨다.
   * @step_4 동아리와 관계된 이미지를 모두 지운다.
   * @step_5 새로운 이미지 url들로 이미지 엔티티를 생성한다.
   * @step_5 동아리 지원 정보 엔티티를 수정한다.
   * @step_6 동아리 엔티티를 수정하고 저장소에 업데이트한다.
   * @returns void
   */
  async execute(port?: IUpdateClubPort): Promise<void> {
    const [clubExist, adminExist, categoryExist] = await Promise.all([
      this.clubRepository.getClubById(port.id),
      this.adminRepository.getAdminById(port.adminId),
      this.categoryRepository.getCategoryById(port.categoryId),
    ]);

    if (!clubExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '동아리 없음' });
    if (!adminExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 관리자' });
    else if (adminExist.clubId !== clubExist.id)
      throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '권한 없음' });
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 카테고리' });
    if (port.clubName && (await this.clubRepository.getClubByClubName(port.clubName)))
      throw Exception.new({ code: Code.CONFLICT, overrideMessage: '동아리 이름 중복' });

    const [_, images, keywords] = await Promise.all([
      this.clubImageRepository.removeImagesByClubId(port.id),
      Promise.all(port.imageUrls.map((url) => ClubImage.new({ url }))),
      Promise.all(port.keywords.map((keyword) => Keyword.new({ keyword }))),
    ]);
    const keywordIds = (await this.keywordRepository.createKeywords(keywords)).map((keyword) => keyword.id);
    const applicationInfo = clubExist.applicationInfo;
    await applicationInfo.edit(port.applicationInfoPort);
    await clubExist.edit({
      categoryId: categoryExist.id,
      adminId: adminExist.id,
      clubImages: images,
      applicationInfo,
      keywordIds,
      ...port,
    });
    await this.clubRepository.updateClub(clubExist);
  }
}

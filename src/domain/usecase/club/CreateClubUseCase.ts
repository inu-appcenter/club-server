import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { Club } from '@/domain/entity/Club';
import { ClubImage } from '@/domain/entity/ClubImage';
import { Keyword } from '@/domain/entity/Keyword';
import { ICreateClubPort } from '@/domain/port/club/ICreateClubPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { IKeywordRepository } from '@/domain/repository/IKeywordRepository';

export class CreateClubUseCase implements IUseCase<ICreateClubPort, Club> {
  constructor(
    private readonly clubRepository: IClubRepository,
    private readonly adminRepository: IAdminRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly keywordRepository: IKeywordRepository,
  ) {}

  /**
   * 동아리 생성
   * @param port ICreateClubPort
   * @step_1 port로 받은 clubName, adminId, categoryId로 각 요소들이 존재하는지 확인한다.
   * @step_2 동아리 생성에 필요한 엔티티를 생성한다.
   * @step_3 키워드를 저장소에 등록한다.
   * @step_4 동아리 엔티티를 생성 후, 저장소에 등록한다. (transaction)
   * @returns Club
   */
  async execute(port?: ICreateClubPort): Promise<Club> {
    const [clubExist, adminExist, categoryExist] = await Promise.all([
      this.clubRepository.getClubByClubName(port.clubName),
      this.adminRepository.getAdminById(port.adminId),
      this.categoryRepository.getCategoryById(port.categoryId),
    ]);

    if (!adminExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 관리자' });
    else if (!adminExist.isRole() || adminExist.getClubId())
      throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '이미 동아리가 있거나 생성 권한이 없음' });
    if (!categoryExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 카테고리' });
    if (clubExist) throw Exception.new({ code: Code.CONFLICT, overrideMessage: '동아리 이름 중복' });

    const [applicationInfo, clubImages, keywords] = await Promise.all([
      ApplicationInfo.new(port.applicationInfoPort),
      Promise.all(port.imageUrls.map((url) => ClubImage.new({ url }))),
      Promise.all(port.keywords.map((keyword) => Keyword.new({ keyword }))),
    ]);
    const keywordNames = (await this.keywordRepository.createKeywords(keywords)).map((keyword) => keyword.getKeyword());

    const club = await Club.new({ applicationInfo, clubImages, keywords: keywordNames, ...port });
    return this.clubRepository.createClub(club);
  }
}

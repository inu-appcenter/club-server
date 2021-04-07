import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { Category } from '@/domain/entity/Category';
import { CreateClubUseCase } from '@/domain/usecase/club/CreateClubUseCase';
import { ClubProvides } from '@/infrastructure/di/providers/provides/club.provide';
import { OrmCategory } from '@/infrastructure/repositories/entities/category.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateClubDTO } from '../models/dto/create-club.dto';

@Injectable()
export class ClubService {
  constructor(
    @Inject(ClubProvides.CREATE_CLUB_PROXY_SERVICE)
    private readonly createClubProxyService: UseCaseProxy<CreateClubUseCase>,
  ) {}

  async createClub(createClubDto: CreateClubDTO, adminId: number) {
    // todo: 흠.. 주입을 받을까..
    const category = await OrmCategory.findOne(createClubDto.categoryId);
    const club = await this.createClubProxyService.getInstance().execute({
      adminId,
      applicationInfo: {
        contact: createClubDto.contact,
        etc: createClubDto.etc,
        kakaoId: createClubDto.kakaoId,
        openChatUrl: createClubDto.openChatUrl,
        websiteUrl: createClubDto.websiteUrl,
      },
      category: new Category({ id: category.id, name: category.name }),
      clubName: createClubDto.clubName,
      images: createClubDto.images,
      location: createClubDto.location,
      summary: createClubDto.summary,
      keywords: createClubDto.keywords,
    });
    return club;
  }
}

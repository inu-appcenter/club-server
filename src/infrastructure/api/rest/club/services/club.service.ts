import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateClubUseCase } from '@/domain/usecase/club/CreateClubUseCase';
import { ClubProvides } from '@/infrastructure/di/providers/provides/club.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CreateClubDTO } from '../models/dto/create-club.dto';

@Injectable()
export class ClubService {
  constructor(
    @Inject(ClubProvides.CREATE_CLUB_PROXY_SERVICE)
    private readonly createClubProxyService: UseCaseProxy<CreateClubUseCase>,
  ) {}
  async createClub(createClubDto: CreateClubDTO, adminId: number) {
    return await this.createClubProxyService.getInstance().execute({
      adminId,
      applicationInfoPort: {
        contact: createClubDto.contact,
        etc: createClubDto.etc,
        kakaoId: createClubDto.kakaoId,
        openChatUrl: createClubDto.openChatUrl,
        websiteUrl: createClubDto.websiteUrl,
      },
      categoryId: createClubDto.categoryId,
      clubName: createClubDto.clubName,
      imageUrls: createClubDto.images,
      location: createClubDto.location,
      summary: createClubDto.summary,
      keywords: createClubDto.keywords.split(','),
    });
  }
}

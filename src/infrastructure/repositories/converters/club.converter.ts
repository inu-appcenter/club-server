import { Club } from '@/domain/entity/Club';
import { OrmClub } from '../entities/club.entity';
import { toApplicationInfo } from './application-info.converter';
import { toClubImage } from './club-image.converter';

export async function toClub(ormClub: OrmClub): Promise<Club> {
  if (!ormClub) return null;
  const { admin, applicationInfo, category, clubImages, keywords } = ormClub;
  const appInfo = await toApplicationInfo(applicationInfo);
  return await Club.new({
    ...ormClub,
    adminId: admin.id,
    applicationInfo: appInfo,
    categoryId: category.id,
    clubImages: await Promise.all(clubImages.map((image) => toClubImage(image))),
    keywords: keywords.map((keyword) => keyword.keyword),
  });
}

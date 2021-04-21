import { ClubImage } from '@/domain/entity/ClubImage';
import { OrmClubImage } from '../entities/club-image.entity';

export async function toClubImage(ormClubImage: OrmClubImage): Promise<ClubImage> {
  if (!ormClubImage) return null;
  return await ClubImage.new({ id: ormClubImage.id, url: ormClubImage.url });
}

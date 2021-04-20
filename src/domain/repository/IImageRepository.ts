import { ClubImage } from '../entity/ClubImage';

export interface IClubImageRepository {
  createImage(image: ClubImage): Promise<ClubImage>;
  getImageById(imageId: number): Promise<ClubImage>;
  getImagesByClubId(imageId: number): Promise<ClubImage[]>;
  removeImageById(imageId: number): Promise<void>;
  removeImagesByClubId(clubId: number): Promise<void>;
}

import { ClubImage } from '@/domain/entity/ClubImage';
import { IClubImageRepository } from '@/domain/repository/IImageRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmClubImage } from './entities/club-image.entity';

@Injectable()
export class ClubImageRepository implements IClubImageRepository {
  constructor(@InjectRepository(OrmClubImage) private readonly ormClubImageRepository: Repository<OrmClubImage>) {}

  createImage(image: ClubImage): Promise<ClubImage> {
    throw new Error('Method not implemented.');
  }
  getImageById(imageId: number): Promise<ClubImage> {
    throw new Error('Method not implemented.');
  }
  getImagesByClubId(imageId: number): Promise<ClubImage[]> {
    throw new Error('Method not implemented.');
  }
  removeImageById(imageId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async removeImagesByClubId(clubId: number): Promise<void> {
    const ormImages = await this.ormClubImageRepository.find({ where: { club: { id: clubId } } });
    await this.ormClubImageRepository.remove(ormImages);
  }
}

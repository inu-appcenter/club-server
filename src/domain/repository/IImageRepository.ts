import { Image } from '../entity/Image';

export interface IImageRepository {
  createImage(image: Image): Promise<Image>;
  getImageById(imageId: number): Promise<Image>;
  removeImageById(image: Image): Promise<void>;
}

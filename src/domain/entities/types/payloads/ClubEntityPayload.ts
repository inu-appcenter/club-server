import { Category } from '../../Category';
import { ApplicationInfo, Image } from '../aliases';

export type ClubEntityPayload = {
  id?: number;
  name: string;
  category: Category;
  location: string;
  representative: string;
  summary: string;
  images: Array<Image>;
  applicationInfo: ApplicationInfo;
};

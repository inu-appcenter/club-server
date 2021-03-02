import { Category } from '../../Category';
import { applicationInfo, Image } from '../aliases';

export type ClubEntityPayload = {
  name: string;
  category: Category;
  location: string;
  representative: string;
  summary: string;
  images: Array<Image>;
  applicationInfo: applicationInfo;
};

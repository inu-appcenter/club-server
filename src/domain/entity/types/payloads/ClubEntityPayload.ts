import { Category } from '@/domain/entity/Category';
import { ApplicationInfo, Image } from '../aliases';

export type ClubEntityPayload = {
  id?: number;
  name: string;
  category: Category;
  location: string;
  summary: string;
  images: Image[];
  applicationInfo: ApplicationInfo;
  keywords?: string;
};

export type EditClubEntityPayload = {
  name?: string;
  category?: Category;
  location?: string;
  summary?: string;
  images?: Image[];
  applicationInfo?: ApplicationInfo;
  keywords?: string;
};

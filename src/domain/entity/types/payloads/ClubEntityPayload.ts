import { Category } from '@/domain/entity/Category';
import { ApplicationInfo } from '../aliases';

export type ClubEntityPayload = {
  id?: number;
  clubName: string;
  category: Category;
  location: string;
  summary: string;
  images: string[];
  applicationInfo: ApplicationInfo;
  keywords?: string;
};

export type EditClubEntityPayload = {
  clubName?: string;
  category?: Category;
  location?: string;
  summary?: string;
  images?: string[];
  applicationInfo?: ApplicationInfo;
  keywords?: string;
};

import { Category } from '@/domain/entity/Category';
import { Admin } from '../../Admin';
import { ApplicationInfo } from '../../ApplicationInfo';
import { Image } from '../../Image';

export type ClubEntityPayload = {
  id?: number;
  clubName: string;
  category: Category;
  location: string;
  summary: string;
  admin: Admin;
  images: Image[];
  applicationInfo: ApplicationInfo;
  keywords?: string[];
};

export type EditClubEntityPayload = {
  clubName?: string;
  category: Category;
  location?: string;
  summary?: string;
  images: Image[];
  applicationInfo: ApplicationInfo;
  keywords?: string[];
  admin: Admin;
};

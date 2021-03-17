import { Category } from '@/domain/entity/Category';
import { ApplicationInfo, Image } from '@/domain/entity/types/aliases';

export interface IUpdateClubPort {
  id: number;
  clubName: string;
  category: Category;
  location: string;
  summary: string;
  images: Image[];
  applicationInfo: ApplicationInfo;
  keywords?: string;
}

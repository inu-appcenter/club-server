import { Category } from '@/domain/entity/Category';
import { ApplicationInfo } from '@/domain/entity/types/aliases';

export interface IUpdateClubPort {
  id: number;
  clubName: string;
  category: Category;
  location: string;
  summary: string;
  images: string[];
  applicationInfo: ApplicationInfo;
  keywords?: string;
}

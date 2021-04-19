import { ApplicationInfo } from '../../ApplicationInfo';
import { ClubImage } from '../../ClubImage';

export type ClubEntityPayload = {
  id?: number;
  clubName: string;
  categoryId: number;
  location: string;
  summary: string;
  adminId: number;
  clubImages: ClubImage[];
  applicationInfo: ApplicationInfo;
  keywordIds?: number[];
};

export type EditClubEntityPayload = {
  clubName?: string;
  categoryId: number;
  location?: string;
  summary?: string;
  clubImages: ClubImage[];
  applicationInfo: ApplicationInfo;
  keywordIds?: number[];
  adminId: number;
};

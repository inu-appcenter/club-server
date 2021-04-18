import { ApplicationInfo } from '../../ApplicationInfo';

export type ClubEntityPayload = {
  id?: number;
  clubName: string;
  categoryId: number;
  location: string;
  summary: string;
  adminId: number;
  imageUrls: string[];
  applicationInfo: ApplicationInfo;
  keywordIds?: number[];
};

export type EditClubEntityPayload = {
  clubName?: string;
  categoryId: number;
  location?: string;
  summary?: string;
  imageUrls: string[];
  applicationInfo: ApplicationInfo;
  keywordIds?: number[];
  adminId: number;
};

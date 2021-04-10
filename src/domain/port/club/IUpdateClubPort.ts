export interface IUpdateClubPort {
  id: number;
  clubName?: string;
  categoryId: number;
  location?: string;
  summary?: string;
  imageIds: number[];
  applicationInfoId: number;
  keywords?: string[];
  adminId: number;
}

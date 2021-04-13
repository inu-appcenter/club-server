import { IUpdateApplicationInfoPort } from '../applicationInfo/IUpdateApplicationInfoPort';

export interface IUpdateClubPort {
  id: number;
  clubName?: string;
  categoryId: number;
  location?: string;
  summary?: string;
  imageUrls: string[];
  applicationInfoPort: IUpdateApplicationInfoPort;
  keywords?: string[];
  adminId: number;
}

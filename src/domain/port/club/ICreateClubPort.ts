import { ICreateApplicationInfoPort } from '../applicationInfo/ICreateApplicationInfoPort';

export interface ICreateClubPort {
  clubName: string;
  categoryId: number;
  location: string;
  summary: string;
  imageUrls: string[];
  applicationInfoPort: ICreateApplicationInfoPort;
  keywords?: string[];
  adminId: number;
}

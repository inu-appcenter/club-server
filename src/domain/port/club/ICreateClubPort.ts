import { ICreateApplicationInfoPort } from '../applicationInfo/ICreateApplicationInfoPort';

export interface ICreateClubPort {
  clubName: string;
  categoryId: number;
  location: string;
  summary: string;
  imageIds: number[];
  applicationInfoPort: ICreateApplicationInfoPort;
  keywords?: string[];
  adminId: number;
}

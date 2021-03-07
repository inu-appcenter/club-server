import { Club } from '../entity/Club';

/**
 * todo: 추천 (새내기 추천, 현내기 추천)
 */
export interface IClubRepository {
  createClub(club: Club): Promise<Club>;
  getClubById(clubId: number): Promise<Club>;
  getAllClubs(): Promise<Club[]>;
  getClubsByCategory(categoryId: number): Promise<Club[]>;
  getClubsByKeyword(keyword: string): Promise<Club[]>;
  updateClub(club: Club): Promise<void>;
  removeClub(clubId: number): Promise<void>;
  recommendClubs(): Promise<any>;
}

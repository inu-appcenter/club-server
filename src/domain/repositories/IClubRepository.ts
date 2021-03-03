import { Club } from '../entities/Club';

/**
 * todo: 추천 (새내기 추천, 현내기 추천)
 */
export interface IClubRepository {
  getClubs(): Promise<Club[]>;
  getClubsByCategory(categoryId: number): Promise<Club[]>;
  getClubsByKeyword(keyword: string): Promise<Club[]>;
  updateClub(club: Club): Promise<Club>;
  removeClub(clubId: number): Promise<any>;
}

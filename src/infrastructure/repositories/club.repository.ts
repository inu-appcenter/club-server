import { Club } from '@/domain/entity/Club';
import { IClubRepository } from '@/domain/repository/IClubRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClubRepository implements IClubRepository {
  getClubByClubName(name: string): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  createClub(club: Club): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  getClubById(clubId: number): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  getClubByIdAndAdminId(clubId: number, adminId: number): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  getClubs(): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  getClubsByCategoryId(categoryId: number): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  getClubsByKeyword(keyword: string): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  getClubsByName(name: string): Promise<Club[]> {
    throw new Error('Method not implemented.');
  }
  updateClub(club: Club): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeClubById(clubId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  recommendClubs(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

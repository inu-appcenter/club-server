import { Admin } from '@/domain/entity/Admin';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmAdmin } from './entities/admin.entity';
import { OrmClub } from './entities/club.entity';

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(
    @InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>,
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
  ) {}

  private async toAdmin(ormAdmin: OrmAdmin): Promise<Admin> {
    if (!ormAdmin) return null;
    const { id, name, phoneNumber, studentId, club } = ormAdmin;
    const admin = await Admin.new({ id, name, studentId, phoneNumber, clubId: club?.id });
    return admin;
  }

  private async toOrmAdmin(admin: Admin): Promise<OrmAdmin> {
    const ormAdmin = new OrmAdmin();
    const { id, name, studentId, phoneNumber, clubId } = admin;
    if (id != -1) ormAdmin.id = id;
    if (clubId) ormAdmin.club = await this.ormClubRepository.findOne(clubId);
    ormAdmin.name = name;
    ormAdmin.studentId = studentId;
    ormAdmin.phoneNumber = phoneNumber;
    return ormAdmin;
  }

  async createAdmin(admin: Admin): Promise<Admin> {
    const ormAdmin = await this.toOrmAdmin(admin);
    const newAdmin = await this.ormAdminRepository.save(ormAdmin);
    return this.toAdmin(newAdmin);
  }

  async registerAdminById(adminId: number): Promise<void> {
    await this.ormAdminRepository.update({ id: adminId }, { role: 1 });
  }

  async getAdmins(role: number): Promise<Admin[]> {
    const ormAdmins = await this.ormAdminRepository.find({
      where: { role },
      relations: ['club'],
    });
    return await Promise.all(ormAdmins.map((ormAdmin) => this.toAdmin(ormAdmin)));
  }

  async getAdminById(adminId: number): Promise<Admin> {
    const admin = await this.ormAdminRepository.findOne(adminId, { relations: ['club'] });
    return await this.toAdmin(admin);
  }

  async removeAdminById(adminId: number): Promise<void> {
    await this.ormAdminRepository.delete({ id: adminId });
  }

  async getAdminByStudentId(studentId: number): Promise<Admin> {
    const admin = await this.ormAdminRepository.findOne({ where: { studentId } });
    return this.toAdmin(admin);
  }

  async updateAdmin(admin: any): Promise<void> {
    const ormAdmin = await this.toOrmAdmin(admin);
    await this.ormAdminRepository.save(ormAdmin);
  }
}

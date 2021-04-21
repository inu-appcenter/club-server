import { Admin } from '@/domain/entity/Admin';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toAdmin } from './converters/admin.converter';
import { OrmAdmin } from './entities/admin.entity';
import { OrmClub } from './entities/club.entity';

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(
    @InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>,
    @InjectRepository(OrmClub) private readonly ormClubRepository: Repository<OrmClub>,
  ) {}

  private async toOrmAdmin(admin: Admin): Promise<OrmAdmin> {
    const ormAdmin = new OrmAdmin();
    const id = admin.getId();
    const clubId = admin.getClubId();
    if (id != -1) ormAdmin.id = id;
    if (clubId) ormAdmin.club = await this.ormClubRepository.findOne(clubId);
    ormAdmin.name = admin.getName();
    ormAdmin.studentId = admin.getStudentId();
    ormAdmin.phoneNumber = admin.getPhoneNumber();
    return ormAdmin;
  }

  async createAdmin(admin: Admin): Promise<Admin> {
    const ormAdmin = await this.toOrmAdmin(admin);
    await this.ormAdminRepository.save(ormAdmin);
    return toAdmin(ormAdmin);
  }

  async registerAdminById(adminId: number): Promise<void> {
    await this.ormAdminRepository.update({ id: adminId }, { role: 1 });
  }

  async getAdmins(role: number): Promise<Admin[]> {
    const ormAdmins = await this.ormAdminRepository.find({
      where: { role },
      relations: ['club'],
    });
    return await Promise.all(ormAdmins.map((ormAdmin) => toAdmin(ormAdmin)));
  }

  async getAdminById(adminId: number): Promise<Admin> {
    const admin = await this.ormAdminRepository.findOne(adminId, { relations: ['club'] });
    return await toAdmin(admin);
  }

  async removeAdminById(adminId: number): Promise<void> {
    await this.ormAdminRepository.delete({ id: adminId });
  }

  async getAdminByStudentId(studentId: number): Promise<Admin> {
    const admin = await this.ormAdminRepository.findOne({ where: { studentId } });
    return toAdmin(admin);
  }

  async updateAdmin(admin: any): Promise<void> {
    const ormAdmin = await this.toOrmAdmin(admin);
    await this.ormAdminRepository.save(ormAdmin);
  }
}

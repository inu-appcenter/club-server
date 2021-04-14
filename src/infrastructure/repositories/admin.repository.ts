import { Admin } from '@/domain/entity/Admin';
import { Club } from '@/domain/entity/Club';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmAdmin } from './entities/admin.entity';

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(@InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>) {}

  private toAdmin(ormAdmin: OrmAdmin): Admin {
    const { id, name, phoneNumber, studentId } = ormAdmin;
    const admin = new Admin({ id, name, studentId, phoneNumber });
    return admin;
  }

  private toOrmAdmin(admin: Admin): OrmAdmin {
    const ormAdmin = new OrmAdmin();
    const { id, name, studentId, phoneNumber } = admin;
    if (id != -1) ormAdmin.id = id;
    ormAdmin.name = name;
    ormAdmin.studentId = studentId;
    ormAdmin.phoneNumber = phoneNumber;
    return ormAdmin;
  }

  async createAdmin(admin: Admin): Promise<Admin> {
    const ormAdmin = this.toOrmAdmin(admin);
    const newAdmin = await this.ormAdminRepository.save(ormAdmin);
    return this.toAdmin(newAdmin);
  }

  async registerAdmin(adminId: number): Promise<void> {
    await this.ormAdminRepository.update({ id: adminId }, { role: 1 });
  }

  async getAdmins(role: number): Promise<Admin[]> {
    const ormAdmins = await this.ormAdminRepository.find({
      select: ['id', 'studentId', 'name', 'phoneNumber'],
      where: { role },
    });
    return ormAdmins.map((ormAdmin) => this.toAdmin(ormAdmin));
  }
  async getAdminById(adminId: number): Promise<Admin> {
    const admin = await this.ormAdminRepository.findOne(adminId);
    if (!admin) throw new HttpException('없는 관리자', HttpStatus.NOT_FOUND);
    return this.toAdmin(admin);
  }

  async removeAdminById(adminId: number): Promise<void> {
    await this.ormAdminRepository.delete({ id: adminId });
  }

  async getAdminByStudentId(studentId: number): Promise<Admin> {
    const admin = await this.ormAdminRepository.findOne({ where: { studentId } });
    return this.toAdmin(admin);
  }

  async updateAdmin(admin: any): Promise<void> {
    const ormAdmin = this.toOrmAdmin(admin);
    await this.ormAdminRepository.save(ormAdmin);
  }
}

// import { Admin } from '@/domain/entity/Admin';
// import { IAdminRepository } from '@/domain/repository/IAdminRepository';
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { OrmAdmin } from './entities/admin.entity';

// @Injectable()
// export class AdminRepository implements IAdminRepository {
//   constructor(@InjectRepository(OrmAdmin) private readonly ormAdminRepository: Repository<OrmAdmin>) {}

//   private toAdmin(ormAdmin: OrmAdmin): Admin {
//     const { id, name, phoneNumber, studentId } = ormAdmin;
//     const admin = new Admin({ id, name, studentId, phoneNumber });
//     return admin;
//   }

//   private toOrmAdmin(admin: Admin): OrmAdmin {
//     const ormAdmin = new OrmAdmin();
//     const { id, name, studentId, phoneNumber } = admin;
//     if (id != -1) ormAdmin.id = id;
//     ormAdmin.name = name;
//     ormAdmin.studentId = studentId;
//     ormAdmin.phoneNumber = phoneNumber;
//     return ormAdmin;
//   }

//   createAdmin(admin: Admin): Promise<Admin> {
//     throw new Error('Method not implemented.');
//   }
//   getAdmins(): Promise<Admin[]> {
//     throw new Error('Method not implemented.');
//   }
//   async getAdminById(adminId: number): Promise<Admin> {
//     const admin = await this.ormAdminRepository.findOne(adminId);
//     if (!admin) throw new HttpException('없는 관리자', HttpStatus.NOT_FOUND);
//     return this.toAdmin(admin);
//   }
//   updateAdminById(admin: Admin): Promise<void> {
//     throw new Error('Method not implemented.');
//   }
//   removeAdminById(adminId: number): Promise<void> {
//     throw new Error('Method not implemented.');
//   }
// }

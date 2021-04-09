import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { ICreateAdminPort } from '@/domain/port/admin/ICreateAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateAdminUseCase implements IUseCase<ICreateAdminPort, Admin> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  async execute(port?: ICreateAdminPort): Promise<Admin> {
    const adminExist = await this.adminRepository.getAdminByStudentId(port.studentId);
    if (adminExist) throw new HttpException('관리자 중복', HttpStatus.CONFLICT);
    return this.adminRepository.createAdmin(await Admin.new(port));
  }
}

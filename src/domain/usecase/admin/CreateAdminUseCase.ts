import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { ICreateAdminPort } from '@/domain/port/admin/ICreateAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateAdminUseCase implements IUseCase<ICreateAdminPort, Admin> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 생성
   * @param port CreateAdminPort
   * @description 학번으로 관리자가 존재하는지 확인 후 존재하지 않으면 관리자 생성
   * @returns Admin
   */
  async execute(port?: ICreateAdminPort): Promise<Admin> {
    const adminExist = await this.adminRepository.getAdminByStudentId(port.studentId);
    if (adminExist) throw new HttpException('관리자 중복', HttpStatus.CONFLICT);
    return this.adminRepository.createAdmin(await Admin.new(port));
  }
}

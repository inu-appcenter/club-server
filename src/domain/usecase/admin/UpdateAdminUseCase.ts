import { IUseCase } from '@/common/usecase/IUseCase';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { IUpdateAdminPort } from '@/domain/port/admin/IUpdateAdminPort';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UpdateAdminUseCase implements IUseCase<IUpdateAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository) {}
  async execute(port?: IUpdateAdminPort): Promise<void> {
    const adminExist = await this.adminRepository.getAdminById(port.id);
    if (!adminExist) throw new HttpException('관리자 없음', HttpStatus.NOT_FOUND);
    await adminExist.edit(port);
    await this.adminRepository.updateAdmin(adminExist);
  }
}

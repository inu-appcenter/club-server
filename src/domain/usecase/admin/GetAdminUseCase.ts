import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { IGetAdminPort } from '@/domain/port/admin/IGetAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class GetAdminUseCase implements IUseCase<IGetAdminPort, Admin> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  execute(port?: IGetAdminPort): Promise<Admin> {
    return this.adminRepository.getAdminById(port.id);
  }
}

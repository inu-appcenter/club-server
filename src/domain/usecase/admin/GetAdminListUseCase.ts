import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { IGetAdminListPort } from '@/domain/port/admin/IGetAdminListPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class GetAdminListUseCase implements IUseCase<IGetAdminListPort, Admin[]> {
  constructor(private readonly adminRepository: IAdminRepository) {}
  execute(port?: IGetAdminListPort): Promise<Admin[]> {
    return this.adminRepository.getAdmins(port.demand);
  }
}

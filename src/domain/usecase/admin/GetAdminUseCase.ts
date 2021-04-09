import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { IGetAdminPort } from '@/domain/port/admin/IGetAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class GetAdminUseCase implements IUseCase<IGetAdminPort, Admin> {
  constructor(private readonly clubRepository: IAdminRepository) {}

  execute(port?: IGetAdminPort): Promise<Admin> {
    return this.clubRepository.getAdminById(port.id);
  }
}

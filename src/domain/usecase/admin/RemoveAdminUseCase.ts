import { IUseCase } from '@/common/usecase/IUseCase';
import { IRemoveAdminPort } from '@/domain/port/admin/IRemoveAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class RemoveAdminUseCase implements IUseCase<IRemoveAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  async execute(port?: IRemoveAdminPort): Promise<void> {
    await this.adminRepository.removeAdminById(port.id);
  }
}

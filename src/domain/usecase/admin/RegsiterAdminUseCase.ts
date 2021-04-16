import { IUseCase } from '@/common/usecase/IUseCase';
import { IRegisterAdminPort } from '@/domain/port/admin/IRegisterAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class RegisterAdminUseCase implements IUseCase<IRegisterAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 등록
   * @param port IRegisterAdminPort
   * @returns void
   */
  async execute(port?: IRegisterAdminPort): Promise<void> {
    await this.adminRepository.registerAdminById(port.id);
  }
}

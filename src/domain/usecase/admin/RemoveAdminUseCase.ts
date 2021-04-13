import { IUseCase } from '@/common/usecase/IUseCase';
import { IRemoveAdminPort } from '@/domain/port/admin/IRemoveAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class RemoveAdminUseCase implements IUseCase<IRemoveAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 삭제
   * @param port IRemoveAdminPort
   * @step_1 port로 받아온 id값으로 특정 관리자를 삭제한다.
   * @returns void
   */
  async execute(port?: IRemoveAdminPort): Promise<void> {
    await this.adminRepository.removeAdminById(port.id);
  }
}

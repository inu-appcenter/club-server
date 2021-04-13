import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { IGetAdminPort } from '@/domain/port/admin/IGetAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class GetAdminUseCase implements IUseCase<IGetAdminPort, Admin> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 조회
   * @param port IGetAdminPort
   * @step_1 port로 받아온 id값으로 특정 관리자를 조회한다.
   * @returns Admin
   */
  execute(port?: IGetAdminPort): Promise<Admin> {
    return this.adminRepository.getAdminById(port.id);
  }
}

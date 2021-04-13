import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { IGetAdminListPort } from '@/domain/port/admin/IGetAdminListPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class GetAdminListUseCase implements IUseCase<IGetAdminListPort, Admin[]> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 모두 조회
   * @param port IGetAdminListPort
   * @step_1 port로 받은 demand에 값에 따라서 실제 관리자인지 관리자가 되고싶은 사람인지 조회한다.
   * @returns Admin[]
   */
  execute(port?: IGetAdminListPort): Promise<Admin[]> {
    return this.adminRepository.getAdmins(port.demand);
  }
}

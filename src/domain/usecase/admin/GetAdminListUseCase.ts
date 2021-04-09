import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { IGetAdminListPort } from '@/domain/port/admin/IGetAdminListPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

/**
 * 관리자 리스트 조회
 * @description demand를 통해서 관리자를 요청한 사람인지, 실제 관리자인지 판단 후 관리자 리스트를 리턴
 */
export class GetAdminListUseCase implements IUseCase<IGetAdminListPort, Admin[]> {
  constructor(private readonly adminRepository: IAdminRepository) {}
  execute(port?: IGetAdminListPort): Promise<Admin[]> {
    return this.adminRepository.getAdmins(port.demand);
  }
}

import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
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
  async execute(port?: IGetAdminPort): Promise<Admin> {
    const admin = await this.adminRepository.getAdminById(port.id);
    if (!admin) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 관리자' });
    return admin;
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { IUpdateAdminPort } from '@/domain/port/admin/IUpdateAdminPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class UpdateAdminUseCase implements IUseCase<IUpdateAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 수정
   * @param port IUpdateAdminPort
   * @step_1 port로 받아온 id값으로 특정 관리자를 조회한다.
   * @step_2 관리자가 없다면 예외를 발생시킨다.
   * @step_3 관리자가 있다면 port로 받아온 데이터로 관리자를 수정한다.
   * @returns void
   */
  async execute(port?: IUpdateAdminPort): Promise<void> {
    const adminExist = await this.adminRepository.getAdminById(port.id);
    if (!adminExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '관리자 없음' });
    await adminExist.edit(port);
    await this.adminRepository.updateAdmin(adminExist);
  }
}

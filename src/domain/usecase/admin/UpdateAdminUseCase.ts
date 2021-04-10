import { IUseCase } from '@/common/usecase/IUseCase';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { IUpdateAdminPort } from '@/domain/port/admin/IUpdateAdminPort';
import { Exception } from '@/common/exception/Exception';
import { Code } from '@/common/code/Code';

export class UpdateAdminUseCase implements IUseCase<IUpdateAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  async execute(port?: IUpdateAdminPort): Promise<void> {
    const adminExist = await this.adminRepository.getAdminById(port.id);
    if (!adminExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '관리자 없음' });
    await adminExist.edit(port);
    await this.adminRepository.updateAdmin(adminExist);
  }
}

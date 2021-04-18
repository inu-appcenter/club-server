import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
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
    const useExist = await this.adminRepository.getAdminById(port.id);
    if (!useExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 관리자' });
    await this.adminRepository.registerAdminById(port.id);
  }
}

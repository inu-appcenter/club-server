import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IRemoveAdminPort } from '@/domain/port/admin/IRemoveAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';
import { IClubRepository } from '@/domain/repository/IClubRepository';

export class RemoveAdminUseCase implements IUseCase<IRemoveAdminPort, void> {
  constructor(private readonly adminRepository: IAdminRepository, private readonly clubRepository: IClubRepository) {}

  /**
   * 관리자 삭제
   * @param port IRemoveAdminPort
   * @step_1 port로 받아온 id값으로 특정 관리자를 조회한다.
   * @step_2 관리자가 없다면 예외를 발생시킨다.
   * @step_3 port로 받아온 id값으로 특정 관리자를 삭제한다.
   * todo: 동아리 정보에서 관리자 삭제해야함
   * @returns void
   */
  async execute(port?: IRemoveAdminPort): Promise<void> {
    const useExist = await this.adminRepository.getAdminById(port.id);
    if (!useExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 관리자' });
    await this.adminRepository.removeAdminById(port.id);
  }
}

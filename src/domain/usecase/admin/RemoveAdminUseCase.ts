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
   * todo: 동아리 관리자를 변경한 후에 삭제가 가능함
   * @returns void
   */
  async execute(port?: IRemoveAdminPort): Promise<void> {
    const adminExist = await this.adminRepository.getAdminById(port.id);
    if (!adminExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 관리자' });
    if (adminExist.getClubId())
      throw Exception.new({ code: Code.ACCESS_DENIED, overrideMessage: '동아리를 다른 관리자에게 줘야함' });
    await this.adminRepository.removeAdminById(port.id);
  }
}

// [2021-04-21 15:32:21]
// [::1][/api/v1/admins/5]
// ER_ROW_IS_REFERENCED_2: Cannot delete or update a parent row: a foreign key constraint fails (`inu_club`.`orm_club`, CONSTRAINT `FK_e5c6bd274f5abae7a268b54759c` FOREIGN KEY (`adminId`) REFERENCES `orm_admin` (`id`))

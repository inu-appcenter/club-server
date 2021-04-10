import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { Admin } from '@/domain/entity/Admin';
import { ICreateAdminPort } from '@/domain/port/admin/ICreateAdminPort';
import { IAdminRepository } from '@/domain/repository/IAdminRepository';

export class CreateAdminUseCase implements IUseCase<ICreateAdminPort, Admin> {
  constructor(private readonly adminRepository: IAdminRepository) {}

  /**
   * 관리자 생성
   * @param port CreateAdminPort
   * @step_1 port로 받은 학번이 저장소에 있는지 확인한다.
   * @step_2_1 저장소에 있다면 예외를 발생시킨다.
   * @step_2_2 저장소에 없다면 관리자 엔티티를 생성한다.
   * @step_3 관리자 엔티티를 저장소에 등록한다.
   * @returns Admin
   */
  async execute(port?: ICreateAdminPort): Promise<Admin> {
    const adminExist = await this.adminRepository.getAdminByStudentId(port.studentId);
    if (adminExist) throw Exception.new({ code: Code.CONFLICT, data: port.studentId, overrideMessage: '학번 중복' });
    const admin = await Admin.new(port);
    return this.adminRepository.createAdmin(admin);
  }
}

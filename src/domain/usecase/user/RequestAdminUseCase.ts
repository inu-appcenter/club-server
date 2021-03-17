import { IUseCase } from '@/common/usecase/IUseCase';
import { IUserRepository } from '../../repository/IUserRepository';
import { IRequestAdminPort } from '@/domain/port/user/IRequestAdminPort';

/**
 * todo: 관리자 요청
 */
export class RequestAdminUseCase implements IUseCase<IRequestAdminPort, void> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(port?: IRequestAdminPort): Promise<void> {
    this.userRepository.requestAdmin();
    return;
  }
}

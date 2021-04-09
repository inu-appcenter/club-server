import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateApplicationInfoPort } from '@/domain/port/applicationInfo/IUpdateApplicationInfoPort';
import { IApplicationInfoRepository } from '@/domain/repository/IApplicationInfoRepository';

export class UpdateApplicationInfoUseCase implements IUseCase<IUpdateApplicationInfoPort, void> {
  constructor(private readonly applicationInfoRepository: IApplicationInfoRepository) {}

  async execute(port?: IUpdateApplicationInfoPort): Promise<void> {
    const info = await this.applicationInfoRepository.getApplicationInfoById(port.id);
    await info.edit(port);
    await this.applicationInfoRepository.updateApplicationInfo(info);
  }
}

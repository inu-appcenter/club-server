import { IUseCase } from '@/common/usecase/IUseCase';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { IGetApplicationInfoPort } from '@/domain/port/applicationInfo/IGetApplicationInfoPort';
import { IApplicationInfoRepository } from '@/domain/repository/IApplicationInfoRepository';

export class GetApplicationInfoUseCase implements IUseCase<IGetApplicationInfoPort, ApplicationInfo> {
  constructor(private readonly applicationInfoRepository: IApplicationInfoRepository) {}

  async execute(port?: IGetApplicationInfoPort): Promise<ApplicationInfo> {
    return this.applicationInfoRepository.getApplicationInfoById(port.id);
  }
}

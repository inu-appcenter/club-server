import { IUseCase } from '@/common/usecase/IUseCase';
import { ApplicationInfo } from '@/domain/entity/ApplicationInfo';
import { ICreateApplicationInfoPort } from '@/domain/port/applicationInfo/ICreateApplicationInfoPort';
import { IApplicationInfoRepository } from '@/domain/repository/IApplicationInfoRepository';

export class CreateApplicationInfoUseCase implements IUseCase<ICreateApplicationInfoPort, ApplicationInfo> {
  constructor(private readonly applicationInfoRepository: IApplicationInfoRepository) {}

  async execute(port?: ICreateApplicationInfoPort): Promise<ApplicationInfo> {
    const info = await ApplicationInfo.new(port);
    return this.applicationInfoRepository.createApplicationInfo(info);
  }
}

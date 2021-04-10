import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateApplicationInfoPort } from '@/domain/port/applicationInfo/IUpdateApplicationInfoPort';
import { IApplicationInfoRepository } from '@/domain/repository/IApplicationInfoRepository';

export class UpdateApplicationInfoUseCase implements IUseCase<IUpdateApplicationInfoPort, void> {
  constructor(private readonly applicationInfoRepository: IApplicationInfoRepository) {}

  async execute(port?: IUpdateApplicationInfoPort): Promise<void> {
    const infoExist = await this.applicationInfoRepository.getApplicationInfoById(port.id);
    if (!infoExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '지원 정보 없음' });
    await infoExist.edit(port);
    await this.applicationInfoRepository.updateApplicationInfo(infoExist);
  }
}

import { IUseCase } from '@/common/usecase/IUseCase';
import { IUpdateApplicationInfoPort } from '@/domain/port/applicationInfo/IUpdateApplicationInfoPort';
import { IApplicationInfoRepository } from '@/domain/repository/IApplicationInfoRepository';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UpdateApplicationInfoUseCase implements IUseCase<IUpdateApplicationInfoPort, void> {
  constructor(private readonly applicationInfoRepository: IApplicationInfoRepository) {}

  async execute(port?: IUpdateApplicationInfoPort): Promise<void> {
    const infoExist = await this.applicationInfoRepository.getApplicationInfoById(port.id);
    if (!infoExist) throw new HttpException('지원 정보 없음', HttpStatus.NOT_FOUND);
    await infoExist.edit(port);
    await this.applicationInfoRepository.updateApplicationInfo(infoExist);
  }
}

import { Code } from '@/common/code/Code';
import { Exception } from '@/common/exception/Exception';
import { IUseCase } from '@/common/usecase/IUseCase';
import { IReportGatheringPort } from '@/domain/port/gathering/IReportGatheringPort';
import { IGatheringRepository } from '@/domain/repository/IGatheringRepository';

export class ReportGatheringUseCase implements IUseCase<IReportGatheringPort, void> {
  constructor(private readonly gatheringRepository: IGatheringRepository) {}

  async execute(port?: IReportGatheringPort): Promise<void> {
    const gatheringExist = await this.gatheringRepository.getGatheringById(port.id);
    if (!gatheringExist) throw Exception.new({ code: Code.NOT_FOUND, overrideMessage: '없는 소모임' });
    await this.gatheringRepository.reportGatheringById(port.id);
  }
}

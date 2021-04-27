import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { GatheringProviders } from '../providers/gathering.providers';
import { GatheringExports } from '../providers/provides/gathering.provide';

@Module({
  imports: [RepositoriesModule],
})
export class GatheringServiceModule {
  static register(): DynamicModule {
    return {
      module: GatheringServiceModule,
      providers: [...GatheringProviders],
      exports: [...GatheringExports],
    };
  }
}

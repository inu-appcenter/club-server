import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { ClubTodayProviders } from '../providers/clubtoday.providers';
import { ClubTodayExports } from '../providers/provides/clubtoday.provide';

@Module({
  imports: [RepositoriesModule],
})
export class ClubTodayServiceModule {
  static register(): DynamicModule {
    return {
      module: ClubTodayServiceModule,
      providers: [...ClubTodayProviders],
      exports: [...ClubTodayExports],
    };
  }
}

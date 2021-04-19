import { RepositoriesModule } from '@/infrastructure/repositories/repositories.module';
import { DynamicModule, Module } from '@nestjs/common';
import { ClubProviders } from '../providers/club.providers';
import { ClubExports } from '../providers/provides/club.provide';

@Module({
  imports: [RepositoriesModule],
})
export class ClubServiceModule {
  static register(): DynamicModule {
    return {
      module: ClubServiceModule,
      providers: [...ClubProviders],
      exports: [...ClubExports],
    };
  }
}

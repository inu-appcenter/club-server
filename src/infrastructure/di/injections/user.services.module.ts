import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { UserExports } from '../providers/provides/user.provide';
import { UserProviders } from '../providers/user.providers';

@Module({
  imports: [RepositoriesModule],
})
export class UserServiceModule {
  static register(): DynamicModule {
    return {
      module: UserServiceModule,
      providers: [...UserProviders],
      exports: [...UserExports],
    };
  }
}

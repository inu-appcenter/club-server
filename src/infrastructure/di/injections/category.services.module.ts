import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { CategoryProviders } from '../providers/category.providers';
import { CategoryExports } from '../providers/provides/category.provide';

@Module({
  imports: [RepositoriesModule],
})
export class CategoryServiceModule {
  static register(): DynamicModule {
    return {
      module: CategoryServiceModule,
      providers: [...CategoryProviders],
      exports: [...CategoryExports],
    };
  }
}

import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateCategoryUseCase } from '@/domain/usecase/category/CreateCategoryUseCase';
import { GetCategoryListUseCase } from '@/domain/usecase/category/GetCategoryListUseCase';
import { GetCategoryUseCase } from '@/domain/usecase/category/GetCategoryUseCase';
import { UpdateCategoryUseCase } from '@/domain/usecase/category/UpdateCategoryUseCase';
import { Provider } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { CategoryProvides } from './provides/category.provide';

const GetCategoryProvider: Provider = {
  inject: [CategoryRepository],
  provide: CategoryProvides.GET_CATEGORY_PROXY_SERVICE,
  useFactory: (categoryRepository: CategoryRepository) => new UseCaseProxy(new GetCategoryUseCase(categoryRepository)),
};

const GetCategoryListProvider: Provider = {
  inject: [CategoryRepository],
  provide: CategoryProvides.GET_CATEGORY_LIST_PROXY_SERVICE,
  useFactory: (categoryRepository: CategoryRepository) =>
    new UseCaseProxy(new GetCategoryListUseCase(categoryRepository)),
};

const CreateCategoryProvider: Provider = {
  inject: [CategoryRepository],
  provide: CategoryProvides.CREATE_CATEGORY_PROXY_SERVICE,
  useFactory: (categoryRepository: CategoryRepository) =>
    new UseCaseProxy(new CreateCategoryUseCase(categoryRepository)),
};

const UpdateCategoryProvider: Provider = {
  inject: [CategoryRepository],
  provide: CategoryProvides.UPDATE_CATEGORY_PROXY_SERVICE,
  useFactory: (categoryRepository: CategoryRepository) =>
    new UseCaseProxy(new UpdateCategoryUseCase(categoryRepository)),
};

export const CategoryProviders = [
  GetCategoryProvider,
  GetCategoryListProvider,
  CreateCategoryProvider,
  UpdateCategoryProvider,
];

import { UseCaseProxy } from '@/common/usecase/UseCaseProxy';
import { CreateCategoryUseCase } from '@/domain/usecase/category/CreateCategoryUseCase';
import { GetCategoryListUseCase } from '@/domain/usecase/category/GetCategoryListUseCase';
import { GetCategoryUseCase } from '@/domain/usecase/category/GetCategoryUseCase';
import { UpdateCategoryUseCase } from '@/domain/usecase/category/UpdateCategoryUseCase';
import { CategoryProvides } from '@/infrastructure/di/providers/provides/category.provide';
import { Inject, Injectable } from '@nestjs/common';
import { CategoryRes } from '../../club/models/res/club.res';
import { CategoryDTO } from '../models/dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CategoryProvides.CREATE_CATEGORY_PROXY_SERVICE)
    private readonly createCategoryProxyService: UseCaseProxy<CreateCategoryUseCase>,
    @Inject(CategoryProvides.GET_CATEGORY_PROXY_SERVICE)
    private readonly getCategoryProxyService: UseCaseProxy<GetCategoryUseCase>,
    @Inject(CategoryProvides.GET_CATEGORY_LIST_PROXY_SERVICE)
    private readonly getCategoryListProxyService: UseCaseProxy<GetCategoryListUseCase>,
    @Inject(CategoryProvides.UPDATE_CATEGORY_PROXY_SERVICE)
    private readonly updateCategoryProxyService: UseCaseProxy<UpdateCategoryUseCase>,
  ) {}

  async getCategories(): Promise<CategoryRes[]> {
    const categories = await this.getCategoryListProxyService.getInstance().execute();
    return categories.map((category) => new CategoryRes(category));
  }

  async appendCategory(categoryDto: CategoryDTO): Promise<CategoryRes> {
    const category = await this.createCategoryProxyService.getInstance().execute(categoryDto);
    return new CategoryRes(category);
  }

  async updateCategory(categoryId: number, categoryDto: CategoryDTO) {
    await this.updateCategoryProxyService.getInstance().execute({ id: categoryId, name: categoryDto.name });
  }
}

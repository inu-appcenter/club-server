import { Category } from '@/domain/entity/Category';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmCategory } from './entities/category.entity';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(@InjectRepository(OrmCategory) private readonly ormCategoryRepository: Repository<OrmCategory>) {}

  private async toCategory(ormCategory: OrmCategory): Promise<Category> {
    if (!ormCategory) return null;
    return await Category.new({ id: ormCategory.id, name: ormCategory.name });
  }

  createCategory(category: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    const ormCategory = await this.ormCategoryRepository.findOne(categoryId);
    return await this.toCategory(ormCategory);
  }

  getCategoryByName(name: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  getCategories(): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  updateCategory(category: Category): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

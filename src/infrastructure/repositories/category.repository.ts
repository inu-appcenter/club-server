import { Category } from '@/domain/entity/Category';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toCategory } from './converters/category.converter';
import { OrmCategory } from './entities/category.entity';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(@InjectRepository(OrmCategory) private readonly ormCategoryRepository: Repository<OrmCategory>) {}

  private toOrmCategory(category: Category): OrmCategory {
    const ormCategory = new OrmCategory();
    const id = category.getId();
    if (id !== -1) ormCategory.id = id;
    ormCategory.name = category.getName();
    return ormCategory;
  }

  async createCategory(category: Category): Promise<Category> {
    const ormCategory = this.toOrmCategory(category);
    await this.ormCategoryRepository.save(ormCategory);
    return await toCategory(ormCategory);
  }

  async getCategoryById(categoryId: number): Promise<Category> {
    const ormCategory = await this.ormCategoryRepository.findOne(categoryId);
    return await toCategory(ormCategory);
  }

  async getCategoryByName(name: string): Promise<Category> {
    const ormCategory = await this.ormCategoryRepository.findOne({ name });
    return await toCategory(ormCategory);
  }

  async getCategories(): Promise<Category[]> {
    const ormCategories = await this.ormCategoryRepository.find();
    return await Promise.all(ormCategories.map((orm) => toCategory(orm)));
  }

  async updateCategory(category: Category): Promise<void> {
    const ormCategory = this.toOrmCategory(category);
    await this.ormCategoryRepository.save(ormCategory);
  }
}

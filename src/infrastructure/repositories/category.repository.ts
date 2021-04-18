import { Category } from '@/domain/entity/Category';
import { ICategoryRepository } from '@/domain/repository/ICategoryRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  createCategory(category: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  getCategoryById(categoryId: number): Promise<Category> {
    throw new Error('Method not implemented.');
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

import { Category } from '@/domain/entity/Category';
import { OrmCategory } from '../entities/category.entity';

export async function toCategory(ormCategory: OrmCategory): Promise<Category> {
  if (!ormCategory) return null;
  return await Category.new({ id: ormCategory.id, name: ormCategory.name });
}

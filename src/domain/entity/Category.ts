import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { CategoryEntityPayload, EditCategoryEntityPayload } from './types/payloads/CategoryEntityPayload';

export class Category extends Entity {
  @IsString()
  private name: string;

  constructor(payload: CategoryEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.name = payload.name;
  }

  public getName(): string {
    return this.name;
  }

  public async edit(payload: EditCategoryEntityPayload): Promise<void> {
    const { name } = payload;
    if (name) this.name = name;
    await this.validate();
  }

  public static async new(payload: CategoryEntityPayload): Promise<Category> {
    const category = new Category(payload);
    await category.validate();
    return category;
  }
}

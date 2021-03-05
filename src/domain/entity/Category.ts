import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { CategoryEntityPayload, EditCategoryEntityPayload } from './types/payloads/CategoryEntityPayload';

export class Category extends Entity {
  @IsString()
  private _name: string;

  constructor(payload: CategoryEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._name = payload.name;
  }

  public get name() {
    return this._name;
  }

  public async edit(payload: EditCategoryEntityPayload): Promise<void> {
    const { name } = payload;
    if (name) this._name = name;
    await this.validate();
  }

  public static async new(payload: CategoryEntityPayload): Promise<Category> {
    const category = new Category(payload);
    await category.validate();
    return category;
  }
}

import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { CategoryEntityPayload } from './types/payloads/CategoryEntityPayload';

export class Category extends Entity {
  @IsString()
  private _name: string;

  constructor(payload: CategoryEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._name = payload.name;
  }

  public get name() {
    return this._name;
  }
}

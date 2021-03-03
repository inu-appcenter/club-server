import { Entity } from '@/common/entity/Entity';
import { IsInt, IsString } from 'class-validator';
import { UserEntityPayload } from './types/payloads/UserEntityPayload';

/**
 * @description 사용자
 */
export class User extends Entity {
  @IsInt()
  private _studentId: number;

  @IsString()
  private _nickname: string;

  constructor(payload: UserEntityPayload) {
    super();
    this.id = payload.id || -1;
    this._studentId = payload.studentId;
    this._nickname = payload.nickname;
  }

  public get studentId() {
    return this._studentId;
  }

  public get nickname() {
    return this._nickname;
  }
}

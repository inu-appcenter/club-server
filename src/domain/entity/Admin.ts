import { Entity } from '@/common/entity/Entity';
import { IsInt, IsMobilePhone, IsString } from 'class-validator';
import { AdminEntityPayload } from './types/payloads/AdminEntityPayload';

/**
 * @description 관리자
 */
export class Admin extends Entity {
  @IsInt()
  private _studentId: number;

  @IsString()
  private _name: string;

  @IsMobilePhone('ko-KR')
  private _phoneNumber: string;

  constructor(payload: AdminEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._studentId = payload.studentId;
    this._name = payload.name;
    this._phoneNumber = payload.phoneNumber;
  }

  public get studentId() {
    return this._studentId;
  }

  public get name() {
    return this._name;
  }

  public get phoneNumber() {
    return this._phoneNumber;
  }
}

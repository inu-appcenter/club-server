import { Entity } from '@/common/entity/Entity';
import { IsMobilePhone, IsString } from 'class-validator';
import { SuperAdminEntityPayload } from './types/payloads/SuperAdminEntityPayload';

/**
 * @description 슈퍼관리자
 */
export class SuperAdmin extends Entity {
  @IsString()
  private _superAdminId: string;

  @IsString()
  private _name: string;

  @IsMobilePhone('ko-KR')
  private _phoneNumber: string;

  @IsString()
  private _password: string;

  constructor(payload: SuperAdminEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._superAdminId = payload.superAdminId;
    this._name = payload.name;
    this._phoneNumber = payload.phoneNumber;
    this._password = payload.password;
  }

  public get superAdminId() {
    return this._superAdminId;
  }

  public get name() {
    return this._name;
  }

  public get phoneNumber() {
    return this._phoneNumber;
  }

  public get password() {
    return this._password;
  }
}

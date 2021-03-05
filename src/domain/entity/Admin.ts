import { Entity } from '@/common/entity/Entity';
import { IsInt, IsMobilePhone, IsString } from 'class-validator';
import { AdminEntityPayload, EditAdminEntityPayload } from './types/payloads/AdminEntityPayload';

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
    this._id = payload.id || -1;

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

  public async edit(payload: EditAdminEntityPayload): Promise<void> {
    const { name, phoneNumber } = payload;
    if (name) this._name = name;
    if (phoneNumber) this._phoneNumber = phoneNumber;
    await this.validate();
  }

  public static async new(payload: AdminEntityPayload): Promise<Admin> {
    const admin = new Admin(payload);
    await admin.validate();
    return admin;
  }
}

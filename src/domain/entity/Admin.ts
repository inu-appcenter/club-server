import { Entity } from '@/common/entity/Entity';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { AdminEntityPayload, EditAdminEntityPayload } from './types/payloads/AdminEntityPayload';

/**
 * @description 관리자
 */
export class Admin extends Entity {
  @IsInt()
  private _studentId: number;
  @IsString()
  private _name: string;
  @IsString()
  private _phoneNumber: string;
  @IsBoolean()
  private _demand: boolean;

  constructor(payload: AdminEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._studentId = payload.studentId;
    this._name = payload.name;
    this._phoneNumber = payload.phoneNumber;
    this._demand = payload.demand;
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

  public get demand() {
    return this._demand;
  }

  public async edit(payload: EditAdminEntityPayload): Promise<void> {
    const { name, phoneNumber, demand } = payload;
    if (name) this._name = name;
    if (phoneNumber) this._phoneNumber = phoneNumber;
    if (demand) this._demand = demand;
    await this.validate();
  }

  public static async new(payload: AdminEntityPayload): Promise<Admin> {
    const admin = new Admin(payload);
    await admin.validate();
    return admin;
  }
}

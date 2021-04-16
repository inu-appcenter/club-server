import { Entity } from '@/common/entity/Entity';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
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
  @IsInt()
  @IsOptional()
  private _clubId: number;

  constructor(payload: AdminEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._studentId = payload.studentId;
    this._name = payload.name;
    this._phoneNumber = payload.phoneNumber;
    this._clubId = payload.clubId;
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

  public get clubId() {
    return this._clubId;
  }

  public async edit(payload: EditAdminEntityPayload): Promise<void> {
    const { name, phoneNumber, clubId } = payload;
    if (name) this._name = name;
    if (phoneNumber) this._phoneNumber = phoneNumber;
    if (clubId) this._clubId = clubId;
    await this.validate();
  }

  public static async new(payload: AdminEntityPayload): Promise<Admin> {
    const admin = new Admin(payload);
    await admin.validate();
    return admin;
  }
}

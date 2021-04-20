import { Entity } from '@/common/entity/Entity';
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
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
  @IsBoolean()
  private _role: boolean;

  constructor(payload: AdminEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._studentId = payload.studentId;
    this._name = payload.name;
    this._phoneNumber = payload.phoneNumber;
    this._clubId = payload.clubId;
    this._role = payload.role;
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

  public get role() {
    return this._role;
  }

  public async edit(payload: EditAdminEntityPayload): Promise<void> {
    const { name, phoneNumber, clubId, role } = payload;
    if (name) this._name = name;
    if (phoneNumber) this._phoneNumber = phoneNumber;
    if (clubId) this._clubId = clubId;
    if (role) this._role = role;
    await this.validate();
  }

  public static async new(payload: AdminEntityPayload): Promise<Admin> {
    const admin = new Admin(payload);
    await admin.validate();
    return admin;
  }
}

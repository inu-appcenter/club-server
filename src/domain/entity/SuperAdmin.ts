import { Entity } from '@/common/entity/Entity';
import { IsMobilePhone, IsString } from 'class-validator';
import { EditSuperAdminEntityPayload, SuperAdminEntityPayload } from './types/payloads/SuperAdminEntityPayload';
import { hash, genSalt } from 'bcryptjs';

/**
 * @description 슈퍼관리자
 */
export class SuperAdmin extends Entity {
  @IsString()
  private _superAdminId: string;
  @IsString()
  private _name: string;
  @IsString()
  private _phoneNumber: string;
  @IsString()
  private _password: string;

  constructor(payload: SuperAdminEntityPayload) {
    super();
    this._id = payload.id || -1;

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

  public async hashPassword(): Promise<void> {
    const salt: string = await genSalt();
    this._password = await hash(this._password, salt);
    await this.validate();
  }

  public async edit(payload: EditSuperAdminEntityPayload): Promise<void> {
    const { name, password, phoneNumber, superAdminId } = payload;
    if (name) this._name = name;
    if (password) this._password = password;
    if (phoneNumber) this._phoneNumber = phoneNumber;
    if (superAdminId) this._superAdminId = superAdminId;
    await this.validate();
  }

  public static async new(payload: SuperAdminEntityPayload): Promise<SuperAdmin> {
    const superAdmin = new SuperAdmin(payload);
    await superAdmin.hashPassword();
    await superAdmin.validate();
    return superAdmin;
  }
}

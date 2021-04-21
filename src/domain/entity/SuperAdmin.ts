import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { EditSuperAdminEntityPayload, SuperAdminEntityPayload } from './types/payloads/SuperAdminEntityPayload';
import { hash, genSalt } from 'bcryptjs';

/**
 * @description 슈퍼관리자
 */
export class SuperAdmin extends Entity {
  @IsString()
  private superAdminId: string;
  @IsString()
  private name: string;
  @IsString()
  private phoneNumber: string;
  @IsString()
  private password: string;

  constructor(payload: SuperAdminEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.superAdminId = payload.superAdminId;
    this.name = payload.name;
    this.phoneNumber = payload.phoneNumber;
    this.password = payload.password;
  }

  public getSuperAdminId(): string {
    return this.superAdminId;
  }

  public getName(): string {
    return this.name;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getPassword(): string {
    return this.password;
  }

  public async hashPassword(): Promise<void> {
    const salt: string = await genSalt();
    this.password = await hash(this.password, salt);
    await this.validate();
  }

  public async edit(payload: EditSuperAdminEntityPayload): Promise<void> {
    const { name, password, phoneNumber, superAdminId } = payload;
    if (name) this.name = name;
    if (password) this.password = password;
    if (phoneNumber) this.phoneNumber = phoneNumber;
    if (superAdminId) this.superAdminId = superAdminId;
    await this.validate();
  }

  public static async new(payload: SuperAdminEntityPayload): Promise<SuperAdmin> {
    const superAdmin = new SuperAdmin(payload);
    await superAdmin.hashPassword();
    await superAdmin.validate();
    return superAdmin;
  }
}

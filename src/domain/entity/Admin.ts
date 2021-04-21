import { Entity } from '@/common/entity/Entity';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { AdminEntityPayload, EditAdminEntityPayload } from './types/payloads/AdminEntityPayload';

/**
 * @description 관리자
 */
export class Admin extends Entity {
  @IsInt()
  private studentId: number;
  @IsString()
  private name: string;
  @IsString()
  private phoneNumber: string;
  @IsInt()
  @IsOptional()
  private clubId: number | null;
  @IsBoolean()
  @IsOptional()
  private role: boolean;

  constructor(payload: AdminEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.studentId = payload.studentId;
    this.name = payload.name;
    this.phoneNumber = payload.phoneNumber;
    this.clubId = payload.clubId;
    this.role = payload.role;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getClubId(): number | null {
    return this.clubId || null;
  }

  public isRole(): boolean {
    return this.role;
  }

  public getStudentId() {
    return this.studentId;
  }

  public getName() {
    return this.name;
  }

  public async edit(payload: EditAdminEntityPayload): Promise<void> {
    const { name, phoneNumber, clubId, role } = payload;
    if (name) this.name = name;
    if (phoneNumber) this.phoneNumber = phoneNumber;
    if (clubId) this.clubId = clubId;
    if (role) this.role = role;
    await this.validate();
  }

  public static async new(payload: AdminEntityPayload): Promise<Admin> {
    const admin = new Admin(payload);
    await admin.validate();
    return admin;
  }
}

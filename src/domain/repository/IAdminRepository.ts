import { Admin } from '../entity/Admin';

/**
 * todo: 웹
 */
export interface IAdminRepository {
  createAdmin(admin: Admin): Promise<Admin>;
  getAdminById(adminId: number): Promise<Admin>;
}

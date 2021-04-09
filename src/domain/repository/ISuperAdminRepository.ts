import { SuperAdmin } from '../entity/SuperAdmin';

export interface ISuperAdminRepository {
  createSuperAdmin(superAdmin: SuperAdmin): Promise<Comment>;
  getSuperAdminById(superAdminId: number): Promise<Comment>;
  removeSuperAdminById(superAdmin: SuperAdmin): Promise<void>;
}

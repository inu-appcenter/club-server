import { SuperAdmin } from '../entity/SuperAdmin';

export interface ISuperAdminRepository {
  createSuperAdmin(superAdmin: SuperAdmin): Promise<SuperAdmin>;
  getSuperAdminById(superAdminId: number): Promise<SuperAdmin>;
  removeSuperAdminById(superAdmin: SuperAdmin): Promise<void>;
}

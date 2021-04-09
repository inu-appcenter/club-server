import { SuperAdmin } from '../entity/SuperAdmin';

export interface ISuperAdminRepository {
  createSuperAdmin(superAdmin: SuperAdmin): Promise<Comment>;
  removeSuperAdminById(superAdmin: SuperAdmin): Promise<void>;
}

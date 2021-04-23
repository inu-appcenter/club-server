import { Admin } from '@/domain/entity/Admin';
import { OrmAdmin } from '../entities/admin.entity';

export async function toAdmin(ormAdmin: OrmAdmin): Promise<Admin> {
  if (!ormAdmin) return null;
  const { club, role } = ormAdmin;
  const admin = await Admin.new({ ...ormAdmin, clubId: club.id, role: role ? true : false });
  return admin;
}

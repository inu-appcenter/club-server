import { User } from '@/domain/entity/User';
import { OrmUser } from '../entities/user.entity';

export async function toUser(ormUser: OrmUser): Promise<User> {
  if (!ormUser) return null;
  const { nickname, studentId, id } = ormUser;
  const user = await User.new({ id, nickname, studentId });
  return user;
}

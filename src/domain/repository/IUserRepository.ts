import { User } from '../entity/User';

/**
 * todo: 관리자 승격 요청
 */
export interface IUserRepository {
  createUser(user: User): Promise<User>;
  getUserById(userId: number): Promise<User>;
  updateUser(user: User): Promise<void>;
  removeUserById(userId: number): Promise<void>;
  requestAdmin(): Promise<void>;
}

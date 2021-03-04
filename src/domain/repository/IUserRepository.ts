import { User } from '../entity/User';

export interface IUserRepository {
  createUser(user: User): Promise<User>;
  getUserById(userId: number): Promise<User>;
  updateUser(user: User): Promise<User>;
  removeUserById(userId: number): Promise<any>;
}

import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmUser } from './entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(OrmUser) private readonly ormUserRepository: Repository<OrmUser>) {}
  requestAdmin(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  createUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getUserById(userId: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  updateUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  removeUserById(userId: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

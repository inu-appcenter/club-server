import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmUser } from './entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(OrmUser) private readonly ormUserRepository: Repository<OrmUser>) {}

  private toUser(ormUser: OrmUser): User {
    const { nickname, studentId, id } = ormUser;
    const user = new User({ id, nickname, studentId });
    return user;
  }

  private toOrmUser(user: User): OrmUser {
    const ormUser = new OrmUser();
    const { id, nickname, studentId } = user;
    ormUser.id = id;
    ormUser.nickname = nickname;
    ormUser.studentId = studentId;
    return ormUser;
  }

  async createUser(user: User): Promise<User> {
    const ormUser = this.toOrmUser(user);
    const saved = await this.ormUserRepository.save(ormUser);
    return this.toUser(saved);
  }

  requestAdmin(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.ormUserRepository.findOne(userId);
    return this.toUser(user);
  }
  updateUser(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeUserById(userId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toUser } from './converters/user.converter';
import { OrmUser } from './entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(OrmUser) private readonly ormUserRepository: Repository<OrmUser>) {}

  private toOrmUser(user: User): OrmUser {
    const ormUser = new OrmUser();
    const id = user.getId();
    if (id != -1) ormUser.id = id;
    ormUser.nickname = user.getNickname();
    ormUser.studentId = user.getStudentId();
    return ormUser;
  }

  async getUsers(): Promise<User[]> {
    const ormUsers = await this.ormUserRepository.find({ select: ['id', 'nickname', 'studentId'] });
    return await Promise.all(ormUsers.map((ormUser) => toUser(ormUser)));
  }

  async createUser(user: User): Promise<User> {
    const ormUser = this.toOrmUser(user); // id값이 없는 유저엔티티
    const newUser = await this.ormUserRepository.save(ormUser);
    return toUser(newUser);
  }

  requestAdmin(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.ormUserRepository.findOne(userId);
    return toUser(user);
  }

  async removeUserById(userId: number): Promise<void> {
    await this.ormUserRepository.delete({ id: userId });
  }

  async getUserByNickname(nickname: string): Promise<User> {
    const user = await this.ormUserRepository.findOne({ nickname });
    return toUser(user);
  }
  async updateUser(user: User): Promise<void> {
    const ormUser = this.toOrmUser(user);
    await this.ormUserRepository.save(ormUser);
  }
}

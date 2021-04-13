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
    if (!ormUser) return null;
    const { nickname, studentId, id } = ormUser;
    const user = new User({ id, nickname, studentId });
    return user;
  }

  private toOrmUser(user: User): OrmUser {
    const ormUser = new OrmUser();
    const { id, nickname, studentId } = user;
    if (id != -1) ormUser.id = id;
    ormUser.nickname = nickname;
    ormUser.studentId = studentId;
    return ormUser;
  }

  async getUsers(): Promise<User[]> {
    const ormUsers = await this.ormUserRepository.find({ select: ['id', 'nickname', 'studentId'] });
    return ormUsers.map((ormUser) => this.toUser(ormUser));
  }

  async createUser(user: User): Promise<User> {
    const ormUser = this.toOrmUser(user); // id값이 없는 유저엔티티
    const newUser = await this.ormUserRepository.save(ormUser);
    return this.toUser(newUser);
  }

  // todo: 괸리자 요청
  requestAdmin(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.ormUserRepository.findOne(userId);
    return this.toUser(user);
  }

  async removeUserById(userId: number): Promise<void> {
    await this.ormUserRepository.delete({ id: userId });
  }

  async getUserByNickname(nickname: string): Promise<User> {
    const user = await this.ormUserRepository.findOne({ nickname });
    return this.toUser(user);
  }
  async updateUser(user: User): Promise<void> {
    const ormUser = this.toOrmUser(user);
    await this.ormUserRepository.save(ormUser);
  }
}

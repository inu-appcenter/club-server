import { RepositoryError } from '@/common/error/RepositoryError';
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
    if (id != -1) ormUser.id = id;
    ormUser.nickname = nickname;
    ormUser.studentId = studentId;
    return ormUser;
  }

  /**
   * todo: offset, limit
   */
  async getUsers(): Promise<User[]> {
    const ormUsers = await this.ormUserRepository.find({ select: ['id', 'nickname', 'studentId'] });
    return ormUsers.map((ormUser) => this.toUser(ormUser));
  }

  // * save 메서드가 생성과 수정 모두 해준다. 나중에 통합 시킬지 고민
  async updateUserById(user: User): Promise<void> {
    const ormUser = this.toOrmUser(user);
    await this.ormUserRepository.save(ormUser, { transaction: false });
  }

  async createUser(user: User): Promise<User> {
    const ormUser = this.toOrmUser(user);
    const saved = await this.ormUserRepository.save(ormUser);
    return this.toUser(saved);
  }

  // todo: 괸리자 요청
  requestAdmin(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.ormUserRepository.findOne(userId);
    if (!user) throw new RepositoryError('없는 유저');

    return this.toUser(user);
  }

  removeUserById(userId: number): Promise<void> {
    this.ormUserRepository.delete({ id: userId });
    return;
  }
}

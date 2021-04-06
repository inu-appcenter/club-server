import { User } from '@/domain/entity/User';
import { IUserRepository } from '@/domain/repository/IUserRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async getUsers(): Promise<User[]> {
    const ormUsers = await this.ormUserRepository.find({ select: ['id', 'nickname', 'studentId'] });
    return ormUsers.map((ormUser) => this.toUser(ormUser));
  }

  // * save 메서드가 생성과 수정 모두 해준다. 나중에 통합 시킬지 고민
  async updateUserById(user: User): Promise<void> {
    await this.getUserById(user.id);
    const ormUser = this.toOrmUser(user);
    await this.ormUserRepository.save(ormUser, { transaction: false });
  }

  async createUser(user: User): Promise<User> {
    const users = await this.ormUserRepository.find({ where: { nickname: user.nickname } });
    if (users.length != 0) throw new HttpException('닉네임 중복', HttpStatus.CONFLICT);
    const ormUser = this.toOrmUser(user); // id값이 없는 유저엔티티
    const saved = await this.ormUserRepository.save(ormUser);
    return this.toUser(saved);
  }

  // todo: 괸리자 요청
  requestAdmin(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.ormUserRepository.findOne(userId);
    if (!user) throw new HttpException('없는 유저', HttpStatus.NOT_FOUND);
    return this.toUser(user);
  }

  async removeUserById(userId: number): Promise<void> {
    await this.getUserById(userId);
    await this.ormUserRepository.delete({ id: userId });
  }
}

import { Entity } from '@/common/entity/Entity';
import { IsInt, IsString, NotEquals } from 'class-validator';
import { EditUserEntityPayload, UserEntityPayload } from './types/payloads/UserEntityPayload';

/**
 * @description 사용자
 */
export class User extends Entity {
  @IsInt()
  private studentId: number;
  @IsString()
  @NotEquals('')
  @NotEquals(null)
  @NotEquals(undefined)
  private nickname: string;

  constructor(payload: UserEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.studentId = payload.studentId;
    this.nickname = payload.nickname;
  }

  public getNickname(): string {
    return this.nickname;
  }

  public getStudentId(): number {
    return this.studentId;
  }

  public async edit(payload: EditUserEntityPayload): Promise<void> {
    const { nickname } = payload;
    if (nickname) this.nickname = nickname;
    await this.validate();
  }

  public static async new(payload: UserEntityPayload): Promise<User> {
    const user = new User(payload);
    await user.validate();
    return user;
  }
}

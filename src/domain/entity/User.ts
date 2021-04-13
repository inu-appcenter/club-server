import { Entity } from '@/common/entity/Entity';
import { IsInt, IsString, NotEquals } from 'class-validator';
import { EditUserEntityPayload, UserEntityPayload } from './types/payloads/UserEntityPayload';

/**
 * @description 사용자
 */
export class User extends Entity {
  @IsInt()
  private _studentId: number;
  @IsString()
  @NotEquals('')
  private _nickname: string;

  constructor(payload: UserEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._studentId = payload.studentId;
    this._nickname = payload.nickname;
  }

  public get studentId() {
    return this._studentId;
  }

  public get nickname() {
    return this._nickname;
  }

  public async edit(payload: EditUserEntityPayload): Promise<void> {
    const { nickname } = payload;
    if (nickname) this._nickname = nickname;
    await this.validate();
  }

  public static async new(payload: UserEntityPayload): Promise<User> {
    const user = new User(payload);
    await user.validate();
    return user;
  }
}

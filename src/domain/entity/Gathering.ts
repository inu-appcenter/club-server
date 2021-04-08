import { Entity } from '@/common/entity/Entity';
import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';
import { Category } from './Category';
import { ParticipationInfo } from './types/aliases';
import { EditGatheringEntityPayload, GatheringEntityPayload } from './types/payloads/GatheringEntityPayload';

/**
 * @description 소모임
 */
export class Gathering extends Entity {
  @IsString()
  private _title: string;

  @IsString()
  private _body: string;

  @IsInt()
  private _numberOfPersonsJoined: number;

  @IsInt()
  private _numberOfPersonsToInvite: number;

  
  private _participationInfo: ParticipationInfo;

  private _category: Category;

  @IsDate()
  private _deadline: Date;

  @IsBoolean()
  private _isClosed: boolean;

  constructor(payload: GatheringEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._title = payload.title;
    this._body = payload.body;
    this._numberOfPersonsJoined = payload.numberOfPersonsJoined;
    this._numberOfPersonsToInvite = payload.numberOfPersonsToInvite;
    this._participationInfo = payload.participationInfo;
    this._category = payload.category;
    this._isClosed = payload.isClosed || false;
    this._deadline = payload.deadline;
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }

  public get numberOfPersonsJoined() {
    return this._numberOfPersonsJoined;
  }

  public get numberOfPersonsToInvite() {
    return this._numberOfPersonsToInvite;
  }

  public get participationInfo() {
    return this._participationInfo;
  }

  public get category() {
    return this._category;
  }

  public get isClosed() {
    return this._isClosed;
  }

  public get deadline() {
    return this._deadline;
  }

  public async edit(payload: EditGatheringEntityPayload): Promise<void> {
    const { body, category, deadline, isClosed, numberOfPersonsToInvite, participationInfo, title } = payload;
    if (body) this._body = body;
    if (category) this._category = category;
    if (deadline) this._deadline = deadline;
    if (isClosed) this._isClosed = isClosed;
    if (numberOfPersonsToInvite) this._numberOfPersonsToInvite = numberOfPersonsToInvite;
    if (participationInfo) this._participationInfo = participationInfo;
    if (title) this._title = title;
    await this.validate();
  }

  public static async new(payload: GatheringEntityPayload): Promise<Gathering> {
    const gathering = new Gathering(payload);
    await gathering.validate();
    return gathering;
  }
}

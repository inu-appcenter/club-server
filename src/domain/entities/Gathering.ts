import { Entity } from '@/common/entity/Entity';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { Category } from './Category';
import { ParticipationInfo } from './types/aliases';
import { GatheringEntityPayload } from './types/payloads/GatheringEntityPayload';

/**
 * @description 소모임
 * todo: 마감 여부
 */
export class Gathering extends Entity {
  @IsString()
  private _host: string;

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

  @IsBoolean()
  private _isClosed: boolean;

  constructor(payload: GatheringEntityPayload) {
    super();
    this.id = payload.id || -1;

    this._host = payload.host;
    this._title = payload.title;
    this._body = payload.body;
    this._numberOfPersonsJoined = payload.numberOfPersonsJoined;
    this._numberOfPersonsToInvite = payload.numberOfPersonsToInvite;
    this._participationInfo = payload.participationInfo;
    this._category = payload.category;
    this._isClosed = payload.isClosed || false;
  }

  public get host() {
    return this._host;
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
}

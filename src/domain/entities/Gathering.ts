import { Entity } from '@/common/entity/Entity';
import { IsString } from 'class-validator';
import { GatheringEntityPayload } from './types/payloads/GatheringEntityPayload';

/**
 * @description 소모임
 */
export class Gathering extends Entity {
  @IsString()
  private _host: string;

  @IsString()
  private _title: string;

  @IsString()
  private _body: string;

  constructor(payload: GatheringEntityPayload) {
    super();
    this._host = payload.host;
    this._title = payload.title;
    this._body = payload.body;
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
}

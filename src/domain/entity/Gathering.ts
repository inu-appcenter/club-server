import { Entity } from '@/common/entity/Entity';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsInt, IsOptional, IsString, NotEquals } from 'class-validator';
import { EditGatheringEntityPayload, GatheringEntityPayload } from './types/payloads/GatheringEntityPayload';

/**
 * @description 소모임
 */
export class Gathering extends Entity {
  @IsString()
  private body: string;
  @IsInt()
  private numberOfPersonsJoined: number;
  @IsInt()
  private numberOfPersonsToInvite: number;
  @IsString()
  private openChatUrl: string;
  @IsInt()
  private userId: number;
  @IsInt()
  private categoryId: number;
  @IsArray()
  @IsOptional()
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => Number)
  private commentIds: number[];
  @IsDate()
  private deadline: Date;
  @IsBoolean()
  private closed: boolean;
  @IsString()
  private title: string;

  constructor(payload: GatheringEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.title = payload.title;
    this.body = payload.body;
    this.numberOfPersonsJoined = payload.numberOfPersonsJoined;
    this.numberOfPersonsToInvite = payload.numberOfPersonsToInvite;
    this.openChatUrl = payload.openChatUrl;
    this.userId = payload.userId;
    this.commentIds = payload.commentIds;
    this.categoryId = payload.categoryId;
    this.closed = payload.closed || false;
    this.deadline = payload.deadline;
  }

  public isClosed(): boolean {
    return this.closed;
  }

  public getDeadline(): Date {
    return this.deadline;
  }

  public getCommentIds(): number[] {
    return this.commentIds;
  }

  public getCategoryId(): number {
    return this.categoryId;
  }

  public getUserId(): number {
    return this.userId;
  }

  public getOpenChatUrl(): string {
    return this.openChatUrl;
  }

  public getNumberOfPersonsToInvite(): number {
    return this.numberOfPersonsToInvite;
  }

  public getNumberOfPersonsJoined(): number {
    return this.numberOfPersonsJoined;
  }

  public getBody(): string {
    return this.body;
  }

  public getTitle(): string {
    return this.title;
  }

  public async edit(payload: EditGatheringEntityPayload): Promise<void> {
    const { body, categoryId, deadline, closed, numberOfPersonsToInvite, openChatUrl, title } = payload;
    if (body) this.body = body;
    if (categoryId) this.categoryId = categoryId;
    if (deadline) this.deadline = deadline;
    if (closed) this.closed = closed;
    if (numberOfPersonsToInvite) this.numberOfPersonsToInvite = numberOfPersonsToInvite;
    if (openChatUrl) this.openChatUrl = openChatUrl;
    if (title) this.title = title;
    await this.validate();
  }

  public static async new(payload: GatheringEntityPayload): Promise<Gathering> {
    const gathering = new Gathering(payload);
    await gathering.validate();
    return gathering;
  }
}

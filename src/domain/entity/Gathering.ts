import { Entity } from '@/common/entity/Entity';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsInstance, IsInt, IsOptional, IsString, NotEquals } from 'class-validator';
import { Category } from './Category';
import { Comment } from './Comment';
import { ParticipationInfo } from './types/aliases';
import { EditGatheringEntityPayload, GatheringEntityPayload } from './types/payloads/GatheringEntityPayload';
import { User } from './User';

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
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => Object)
  private participationInfo: ParticipationInfo;
  @IsInstance(User)
  @NotEquals(null)
  @NotEquals(undefined)
  private user: User;
  @IsInstance(Category)
  @NotEquals(null)
  @NotEquals(undefined)
  private category: Category;
  @IsArray()
  @IsOptional()
  @NotEquals(null)
  @NotEquals(undefined)
  @Type(() => Comment)
  private comments: Comment[];
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
    this.participationInfo = payload.participationInfo;
    this.user = payload.user;
    this.comments = payload.comments || new Array<Comment>();
    this.category = payload.category;
    this.closed = payload.closed || false;
    this.deadline = payload.deadline;
  }

  public isClosed(): boolean {
    return this.closed;
  }

  public getDeadline(): Date {
    return this.deadline;
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  public getCategory(): Category {
    return this.category;
  }

  public getUser(): User {
    return this.user;
  }

  public getParticipationInfo(): ParticipationInfo {
    return this.participationInfo;
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
    const { body, category, deadline, closed, numberOfPersonsToInvite, participationInfo, title } = payload;
    if (body) this.body = body;
    if (category) this.category = category;
    if (deadline) this.deadline = deadline;
    if (closed) this.closed = closed;
    if (numberOfPersonsToInvite) this.numberOfPersonsToInvite = numberOfPersonsToInvite;
    if (participationInfo) this.participationInfo = participationInfo;
    if (title) this.title = title;
    await this.validate();
  }

  public static async new(payload: GatheringEntityPayload): Promise<Gathering> {
    const gathering = new Gathering(payload);
    await gathering.validate();
    return gathering;
  }
}

import { Category } from '@/domain/entity/Category';
import { ParticipationInfo } from '../aliases';

export type GatheringEntityPayload = {
  id?: number;
  title: string;
  body: string;
  numberOfPersonsJoined: number;
  numberOfPersonsToInvite: number;
  participationInfo: ParticipationInfo;
  category: Category;
  isClosed?: boolean;
  deadline: Date;
};

export type EditGatheringEntityPayload = {
  title?: string;
  body?: string;
  numberOfPersonsToInvite?: number;
  participationInfo?: ParticipationInfo;
  category?: Category;
  isClosed?: boolean;
  deadline?: Date;
};

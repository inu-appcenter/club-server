import { Category } from '@/domain/entity/Category';
import { Comment } from '../../Comment';
import { User } from '../../User';
import { ParticipationInfo } from '../aliases';

export type GatheringEntityPayload = {
  id?: number;
  title: string;
  body: string;
  numberOfPersonsJoined: number;
  numberOfPersonsToInvite: number;
  participationInfo: ParticipationInfo;
  user: User;
  comments: Comment[];
  category: Category;
  closed?: boolean;
  deadline: Date;
};

export type EditGatheringEntityPayload = {
  title?: string;
  body?: string;
  numberOfPersonsToInvite?: number;
  participationInfo?: ParticipationInfo;
  category?: Category;
  closed?: boolean;
  deadline?: Date;
};

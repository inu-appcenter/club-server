import { Category } from '../../Category';
import { ParticipationInfo } from '../aliases';

export type GatheringEntityPayload = {
  id?: number;
  host: string;
  title: string;
  body: string;
  numberOfPersonsJoined: number;
  numberOfPersonsToInvite: number;
  participationInfo: ParticipationInfo;
  category: Category;
  isClosed?: boolean;
};

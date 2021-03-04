import { Image } from '../aliases';

export type ClubTodayEntityPayload = {
  id?: number;
  headImage: Image;
  title: string;
  body: string;
};

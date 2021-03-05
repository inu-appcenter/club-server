import { Image } from '../aliases';

export type ClubTodayEntityPayload = {
  id?: number;
  headImage: Image;
  title: string;
  body: string;
};

export type EditClubTodayEntityPayload = {
  headImage?: Image;
  title?: string;
  body?: string;
};

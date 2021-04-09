import { Image } from '../../Image';

export type ClubTodayEntityPayload = {
  id?: number;
  headerImage: Image;
  title: string;
  body: string;
};

export type EditClubTodayEntityPayload = {
  headerImage?: Image;
  title?: string;
  body?: string;
};

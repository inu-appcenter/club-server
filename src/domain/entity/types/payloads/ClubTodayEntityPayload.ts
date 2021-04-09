import { Club } from '../../Club';
import { Image } from '../../Image';

export type ClubTodayEntityPayload = {
  id?: number;
  headerImage: Image;
  title: string;
  body: string;
  club: Club;
};

export type EditClubTodayEntityPayload = {
  headerImage?: Image;
  title?: string;
  body?: string;
};

import { Club } from '../../Club';
import { ClubImage } from '../../ClubImage';

export type ClubTodayEntityPayload = {
  id?: number;
  headerImage: ClubImage;
  title: string;
  body: string;
  club: Club;
};

export type EditClubTodayEntityPayload = {
  headerImage?: ClubImage;
  title?: string;
  body?: string;
};

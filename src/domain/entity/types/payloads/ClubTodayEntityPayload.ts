import { Club } from '../../Club';

export type ClubTodayEntityPayload = {
  id?: number;
  headerImageUrl: string;
  title: string;
  body: string;
  club: Club;
};

export type EditClubTodayEntityPayload = {
  headerImageUrl?: string;
  title?: string;
  body?: string;
};

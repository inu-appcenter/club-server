export type ClubTodayEntityPayload = {
  id?: number;
  headerImage: string;
  title: string;
  body: string;
};

export type EditClubTodayEntityPayload = {
  headerImage?: string;
  title?: string;
  body?: string;
};

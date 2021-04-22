export type ClubTodayEntityPayload = {
  id?: number;
  headerImageUrl?: string;
  title: string;
  body: string;
  clubId: number;
};

export type EditClubTodayEntityPayload = {
  headerImageUrl?: string;
  title?: string;
  body?: string;
};

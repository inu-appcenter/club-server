export type ApplicationInfoPayload = {
  id?: number;
  kakaoId?: string;
  openChatUrl?: string;
  websiteUrl?: string;
  contact?: string;
  etc?: string;
};

export type EditApplicationInfoPayload = {
  kakaoId?: string;
  openChatUrl?: string;
  websiteUrl?: string;
  contact?: string;
  etc?: string;
};

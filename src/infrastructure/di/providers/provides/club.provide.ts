export const CREATE_CLUB_PROXY_SERVICE = 'createClubProxyService';
export const GET_CLUB_PROXY_SERVICE = 'getClubProxyService';
export const GET_ALL_CLUB_PROXY_SERVICE = 'getAllClubProxyService';
export const GET_ALL_CLUB_CATEGORY_PROXY_SERVICE = 'getAllClubCategoryProxyService';
export const GET_ALL_CLUB_KEYWORD_PROXY_SERVICE = 'getAllClubKeywordProxyService';
export const UPDATE_CLUB_PROXY_SERVICE = 'updateClubProxyService';
export const REMOVE_CLUB_PROXY_SERVICE = 'removeClubProxyService';
export const RECOMMEND_CLUB_PROXY_SERVICE = 'RecommendClubProxyService';

export const ClubProvides = {
  CREATE_CLUB_PROXY_SERVICE,
  // GET_CLUB_PROXY_SERVICE,
  // GET_ALL_CLUB_PROXY_SERVICE,
  // GET_ALL_CLUB_CATEGORY_PROXY_SERVICE,
  // GET_ALL_CLUB_KEYWORD_PROXY_SERVICE,
  UPDATE_CLUB_PROXY_SERVICE,
  // REMOVE_CLUB_PROXY_SERVICE,
  // RECOMMEND_CLUB_PROXY_SERVICE,
};

export const ClubExports = Object.entries(ClubProvides).map((e) => e[1]);

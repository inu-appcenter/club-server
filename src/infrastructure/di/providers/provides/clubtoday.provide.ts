const GET_CLUB_TODAY_PROXY_SERVICE = 'getClubTodayProxyService';
const GET_CLUB_TODAY_LIST_PROXY_SERVICE = 'getClubTodayListProxyService';
const GET_CLUB_TODAY_LIST_BY_CLUB_PROXY_SERVICE = 'getClubTodayListByClubProxyService';
// const CREATE_CLUB_TODAY_PROXY_SERVICE = 'createClubTodayProxyService';
// const UPDATE_CLUB_TODAY_PROXY_SERVICE = 'updateClubTodayProxyService';
const REMOVE_CLUB_TODAY_PROXY_SERVICE = 'removeClubTodayProxyService';

export const ClubTodayProvides = {
  GET_CLUB_TODAY_PROXY_SERVICE,
  GET_CLUB_TODAY_LIST_PROXY_SERVICE,
  GET_CLUB_TODAY_LIST_BY_CLUB_PROXY_SERVICE,
  //   CREATE_CLUB_TODAY_PROXY_SERVICE,
  //   UPDATE_CLUB_TODAY_PROXY_SERVICE,
  REMOVE_CLUB_TODAY_PROXY_SERVICE,
};

export const ClubTodayExports = Object.entries(ClubTodayProvides).map((e) => e[1]);

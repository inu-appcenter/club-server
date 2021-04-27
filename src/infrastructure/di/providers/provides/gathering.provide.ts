export const CREATE_GATHERING_PROXY_SERVICE = 'createGatheringProxyService';
export const GET_GATHERING_PROXY_SERVICE = 'getGatheringProxyService';
export const GET_ALL_GATHERING_PROXY_SERVICE = 'getAllGatheringProxyService';
export const GET_ALL_MY_GATHERING_PROXY_SERVICE = 'getAllMyGatheringProxyService';
export const UPDATE_GATHERING_PROXY_SERVICE = 'updateGatheringProxyService';
export const REMOVE_GATHERING_PROXY_SERVICE = 'removeGatheringProxyService';
export const CLOSE_GATHERING_PROXY_SERVICE = 'closeGatheringProxyService';
export const REPORT_GATHERING_PROXY_SERVICE = 'reportGatheringProxyService';
export const PARTICIPATE_IN_GATHERING_PROXY_SERVICE = 'participateInGatheringProxyService';
export const GET_ALL_POSTED_GATHERING_PROXY_SERVICE = 'getAllPostedGatheringProxyService';
export const QUIT_GATHERING_PROXY_SERVICE = 'quitGatheringProxyService';

export const GatheringProvides = {
  CREATE_GATHERING_PROXY_SERVICE,
  GET_GATHERING_PROXY_SERVICE,
  GET_ALL_GATHERING_PROXY_SERVICE,
  GET_ALL_MY_GATHERING_PROXY_SERVICE,
  UPDATE_GATHERING_PROXY_SERVICE,
  CLOSE_GATHERING_PROXY_SERVICE,
  REMOVE_GATHERING_PROXY_SERVICE,
  REPORT_GATHERING_PROXY_SERVICE,
  PARTICIPATE_IN_GATHERING_PROXY_SERVICE,
  GET_ALL_POSTED_GATHERING_PROXY_SERVICE,
  QUIT_GATHERING_PROXY_SERVICE,
};

export const GatheringExports = Object.entries(GatheringProvides).map((e) => e[1]);

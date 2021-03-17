const GET_USER_PROXY_SERVICE = 'getUserProxyService';
const GET_USER_LIST_PROXY_SERVICE = 'getUserListProxyService';
const CREATE_USER_PROXY_SERVICE = 'createUserProxyService';
const UPDATE_USER_PROXY_SERVICE = 'updateUserProxyService';
const REMOVE_USER_PROXY_SERVICE = 'removeUserProxyService';
const REQUEST_ADMIN_PROXY_SERVICE = 'requestAdminProxyService';

export const UserProvides = {
  GET_USER_PROXY_SERVICE,
  GET_USER_LIST_PROXY_SERVICE,
  CREATE_USER_PROXY_SERVICE,
  UPDATE_USER_PROXY_SERVICE,
  REMOVE_USER_PROXY_SERVICE,
  REQUEST_ADMIN_PROXY_SERVICE,
};

export const UserExports = Object.entries(UserProvides).map((e) => e[1]);

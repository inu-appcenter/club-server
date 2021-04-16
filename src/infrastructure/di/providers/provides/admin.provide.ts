const GET_ADMIN_PROXY_SERVICE = 'getAdminProxyService';
const GET_ADMIN_LIST_PROXY_SERVICE = 'getAdminListProxyService';
const CREATE_ADMIN_PROXY_SERVICE = 'createAdminProxyService';
const UPDATE_ADMIN_PROXY_SERVICE = 'updateAdminProxyService';
const REMOVE_ADMIN_PROXY_SERVICE = 'removeAdminProxyService';
const REGISTER_ADMIN_PROXY_SERVICE = 'registerAdminProxyService';

export const AdminProvides = {
  GET_ADMIN_PROXY_SERVICE,
  GET_ADMIN_LIST_PROXY_SERVICE,
  CREATE_ADMIN_PROXY_SERVICE,
  UPDATE_ADMIN_PROXY_SERVICE,
  REMOVE_ADMIN_PROXY_SERVICE,
  REGISTER_ADMIN_PROXY_SERVICE,
};

export const AdminExports = Object.entries(AdminProvides).map((e) => e[1]);

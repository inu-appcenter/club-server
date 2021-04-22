const GET_CATEGORY_PROXY_SERVICE = 'getCategoryProxyService';
const GET_CATEGORY_LIST_PROXY_SERVICE = 'getCategoryListProxyService';
const CREATE_CATEGORY_PROXY_SERVICE = 'createCategoryProxyService';
const UPDATE_CATEGORY_PROXY_SERVICE = 'updateCategoryProxyService';
// const REMOVE_CATEGORY_PROXY_SERVICE = 'removeCategoryProxyService';

export const CategoryProvides = {
  GET_CATEGORY_PROXY_SERVICE,
  GET_CATEGORY_LIST_PROXY_SERVICE,
  CREATE_CATEGORY_PROXY_SERVICE,
  UPDATE_CATEGORY_PROXY_SERVICE,
  //   REMOVE_CATEGORY_PROXY_SERVICE,
};

export const CategoryExports = Object.entries(CategoryProvides).map((e) => e[1]);

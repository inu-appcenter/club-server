import { ISwaggerTag } from './ISwaggerConfig';

export const SWAGGER_TAG_AUTH: ISwaggerTag = { tag: 'Auth', desc: '사용자 인증 API' };
export const SWAGGER_TAG_USER: ISwaggerTag = { tag: 'User', desc: '사용자 API' };
export const SWAGGER_TAG_ADMIN: ISwaggerTag = { tag: 'Admin', desc: '관리자 API' };
export const SWAGGER_TAG_SUPERADMIN: ISwaggerTag = { tag: 'SuperAdmin', desc: '슈퍼관리자 API' };
export const SWAGGER_TAG_CLUB: ISwaggerTag = { tag: 'Club', desc: '동아리 API' };
export const SWAGGER_TAG_CLUBTODAY: ISwaggerTag = { tag: 'Club-ClubToday', desc: '클럽투데이 API' };
export const SWAGGER_TAG_CLUB_SEARCH: ISwaggerTag = { tag: 'Club-Search', desc: '동아리 검색 API' };
export const SWAGGER_TAG_CLUB_RECOMMENDATION: ISwaggerTag = { tag: 'Club-Recommendation', desc: '동아리 추천 API' };
export const SWAGGER_TAG_GATHERING: ISwaggerTag = { tag: 'Gathering', desc: '소모임 API' };
export const SWAGGER_TAG_GATHERING_COMMENT: ISwaggerTag = { tag: 'Gathering-Comment', desc: '소모임 댓글 API' };
export const SWAGGER_TAG_GATHERING_RECOMMENT: ISwaggerTag = { tag: 'Gathering-ReComment', desc: '소모임 대댓글 API' };
export const SWAGGER_TAG_GATHERING_PARTICIPATION: ISwaggerTag = {
  tag: 'Gathering-Participation',
  desc: '소모임 참가 API',
};
export const SWAGGER_TAG_UPLOAD_IMAGE: ISwaggerTag = { tag: 'Upload-Image', desc: '사진 업로드 API' };
export const SWAGGER_TAG_CATEGORY = { tag: 'Category', desc: '카테고리 API (슈퍼관리자 전용)' };

export const SWAGGER_TAGS = [
  SWAGGER_TAG_AUTH,
  SWAGGER_TAG_USER,
  SWAGGER_TAG_ADMIN,
  SWAGGER_TAG_SUPERADMIN,
  SWAGGER_TAG_CLUB,
  SWAGGER_TAG_CLUBTODAY,
  SWAGGER_TAG_CLUB_SEARCH,
  SWAGGER_TAG_CLUB_RECOMMENDATION,
  SWAGGER_TAG_GATHERING,
  SWAGGER_TAG_GATHERING_COMMENT,
  SWAGGER_TAG_GATHERING_RECOMMENT,
  SWAGGER_TAG_GATHERING_PARTICIPATION,
  SWAGGER_TAG_UPLOAD_IMAGE,
  SWAGGER_TAG_CATEGORY,
];

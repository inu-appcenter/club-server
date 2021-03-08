import { ISwaggerConfig } from './ISwaggerConfig';

export const SWAGGER_CONFIG_v1: ISwaggerConfig = {
  title: 'INU CLUB API',
  description: '인천대학교 동아리 애플리케이션 API',
  version: '1.0',
  tags: [
    { tag: 'Auth', desc: '사용자 인증 API' },
    { tag: 'User', desc: '사용자 API' },
    { tag: 'ClubToday', desc: '클럽투데이 API' },
    { tag: 'Club', desc: '동아리 API' },
    { tag: 'Gathering', desc: '소모임 API' },
    { tag: 'Comment', desc: '소모임의 댓글 API' },
    { tag: 'ReComment', desc: '소모임의 대댓글 API' },
    { tag: 'Participation', desc: '소모임의 참가 API' },
  ],
  basePath: '/api/v1',
};

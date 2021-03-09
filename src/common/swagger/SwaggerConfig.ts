import { ISwaggerConfig } from './ISwaggerConfig';
import { SWAGGER_TAGS } from './SwaggerTags';

export const SWAGGER_CONFIG_v1: ISwaggerConfig = {
  title: 'INU CLUB API',
  description: '인천대학교 동아리 애플리케이션 API',
  version: '1.0',
  tags: SWAGGER_TAGS,
  basePath: '/api/v1',
};

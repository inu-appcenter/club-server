import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG_v1 } from './SwaggerConfig';

export function createDocument(app: INestApplication): OpenAPIObject {
  const builder = new DocumentBuilder()
    .setExternalDoc('GitHub', 'https://github.com/inu-appcenter/club-server')
    .setContact('bbaktaeho', 'https://bbaktaeho-95.tistory.com/', 'bbaktaeho@kakao.com')
    .setDescription(SWAGGER_CONFIG_v1.description)
    .setTitle(SWAGGER_CONFIG_v1.title)
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
    .setVersion(SWAGGER_CONFIG_v1.version)
    .addServer(SWAGGER_CONFIG_v1.basePath);

  for (const tagType of SWAGGER_CONFIG_v1.tags) builder.addTag(tagType.tag, tagType.desc);
  const options = builder.build();
  return SwaggerModule.createDocument(app, options, { ignoreGlobalPrefix: true });
}

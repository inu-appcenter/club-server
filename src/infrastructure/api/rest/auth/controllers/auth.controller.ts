import { SWAGGER_TAG_AUTH } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDTO } from '../models/dto/login.dto';
import { AuthService } from '../services/auth.service';

@ApiTags(SWAGGER_TAG_AUTH.tag)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // todo: 인증 로직, 토큰 응답
  // todo: 관리자, 사용자 모두?
  // todo: 로그인 서버에서 응답으로 오는 토큰 처리와 문서화
  // todo: response 타입과 문서화
  @ApiOperation({ summary: '로그인' })
  @ApiOkResponse({ description: '성공' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiBody({ type: LoginDTO })
  @Post('login')
  async login(@Body() credentials: LoginDTO) {
    return;
  }
}

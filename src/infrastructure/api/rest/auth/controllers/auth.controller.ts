import { SWAGGER_TAG_AUTH } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDTO } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@ApiTags(SWAGGER_TAG_AUTH.tag)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // todo: 관리자 테이블과 사용자 테이블 모두 검색해~
  @ApiOperation({ summary: '로그인' })
  @ApiOkResponse({ description: '성공' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiBody({ type: LoginDTO })
  @Post('login')
  login(@Body(ValidationPipe) credentials: LoginDTO) {
    return;
  }
}

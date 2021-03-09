import { SWAGGER_TAG_AUTH } from '@/common/swagger/SwaggerTagS';
import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';

@ApiTags(SWAGGER_TAG_AUTH.tag)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // todo: 관리자 테이블과 사용자 테이블 모두 검색해~
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login() {
    return;
  }
}

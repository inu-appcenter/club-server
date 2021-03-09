import { SWAGGER_TAG_SUPERADMIN } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_SUPERADMIN.tag)
@Controller('superadmin')
export class SuperAdminController {
  @ApiOperation({ summary: '관리자 등록 허가' })
  @ApiCreatedResponse({ description: '성공' })
  @Post('demand/:demandId')
  registerAdmin() {
    return;
  }

  @ApiOperation({ summary: '관리자 등록 요청 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get('demand')
  getDemandAdmin() {
    return;
  }
}

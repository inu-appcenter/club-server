import { SWAGGER_TAG_SUPERADMIN } from '@/common/swagger/SwaggerTagS';
import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_SUPERADMIN.tag)
@Controller('superadmin')
export class SuperAdminController {
  @ApiOperation({ summary: '관리자 등록 허가' })
  @Post('demand/:demandId')
  createAdmin() {
    return;
  }

  @ApiOperation({ summary: '관리자 등록 요청 조회' })
  @Get('demand')
  getDemandAdmin() {
    return;
  }
}

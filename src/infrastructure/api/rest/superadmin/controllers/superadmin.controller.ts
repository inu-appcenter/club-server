import { SWAGGER_TAG_SUPERADMIN } from '@/common/swagger/SwaggerTags';
import { Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllDemandAdminsRes } from '../models/res/all-demand-admins.res';

// todo: 슈퍼 관리자가 더 할 수 있는 일을 만들자
// todo: 신고 보기
@ApiTags(SWAGGER_TAG_SUPERADMIN.tag)
@Controller('superadmin')
export class SuperAdminController {
  @ApiOperation({ summary: '관리자 등록 허가' })
  @ApiCreatedResponse({ description: '성공' })
  @Post('demand/:demandId')
  async registerAdmin(@Param('demandId') demandId: number): Promise<any> {
    return;
  }

  @ApiOperation({ summary: '관리자 등록 요청 조회' })
  @ApiOkResponse({ description: '성공', type: AllDemandAdminsRes })
  @Get('demand')
  async getDemandAdmin(): Promise<AllDemandAdminsRes> {
    return;
  }
}

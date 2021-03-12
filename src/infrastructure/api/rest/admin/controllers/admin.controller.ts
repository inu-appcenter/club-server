import { SWAGGER_TAG_ADMIN } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DemandAdminDTO } from '../models/dto/demand-admin.dto';
import { UpdateAdminDTO } from '../models/dto/update-admin.dto';
import { AdminRes } from '../models/res/admin.res';
import { DemandAdminRes } from '../models/res/demand-admin.res';

@ApiTags(SWAGGER_TAG_ADMIN.tag)
@Controller('admins')
export class AdminController {
  @ApiOperation({ summary: '관리자 등록 요청' })
  @ApiBody({ type: DemandAdminDTO })
  @ApiCreatedResponse({ description: '성공' })
  @Post('demand')
  async demandToAdmin(@Body() demandAdminDto: DemandAdminDTO) {
    return;
  }

  @ApiOperation({ summary: '관리자 정보 조회' })
  @ApiOkResponse({ description: '성공', type: AdminRes })
  @Get(':adminId')
  async getAdminById(@Param('adminId') adminId: number): Promise<AdminRes> {
    return;
  }

  @ApiOperation({ summary: '관리자 정보 수정' })
  @ApiBody({ type: UpdateAdminDTO })
  @ApiOkResponse({ description: '성공', type: AdminRes })
  @Put(':adminId')
  async updateAdminById(@Param('adminId') adminId: number): Promise<AdminRes> {
    return;
  }

  // todo
  @ApiOperation({ summary: '관리자 권한 위임' })
  @Post(':adminId/delegation')
  async delegateAdmin(@Param('adminId') adminId: number) {
    return;
  }
}

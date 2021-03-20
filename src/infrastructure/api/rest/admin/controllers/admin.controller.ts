import { SWAGGER_TAG_ADMIN } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DemandAdminDTO } from '../models/dto/demand-admin.dto';
import { UpdateAdminDTO } from '../models/dto/update-admin.dto';
import { AdminRes } from '../models/res/admin.res';

@ApiTags(SWAGGER_TAG_ADMIN.tag)
@Controller('admins')
export class AdminController {
  @ApiOperation({ summary: '관리자 등록 요청' })
  @ApiBody({ type: DemandAdminDTO })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @Post('demand')
  async demandToAdmin(@Body() demandAdminDto: DemandAdminDTO) {
    return;
  }

  @ApiOperation({ summary: '관리자 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: AdminRes })
  @Get()
  async getAdmins(): Promise<AdminRes[]> {
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

  // todo: 이거 한다는건지 만다는건지?
  @ApiOperation({ summary: '관리자 권한 위임' })
  @Post(':adminId/delegation')
  async delegateAdmin(@Param('adminId') adminId: number) {
    return;
  }
}

import { SWAGGER_TAG_ADMIN } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAdminDTO } from '../models/dto/create-admin.dto';
import { RemoveAdminDTO } from '../models/dto/remove-admin.dto';
import { UpdateAdminDTO } from '../models/dto/update-admin.dto';
import { AdminRes } from '../models/res/admin.res';
import { AdminService } from '../services/admin.service';

@ApiTags(SWAGGER_TAG_ADMIN.tag)
@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: '관리자 등록 요청' })
  @ApiBody({ type: CreateAdminDTO })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDTO) {
    // todo: 일단 아무런 학번이나 넣자구여~
    const studentId = Math.floor(Date.now() / 1000);
    await this.adminService.createAdmin(studentId, createAdminDto);
    return {};
  }

  @ApiOperation({ summary: '관리자 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: AdminRes })
  @Get()
  async getAdmins(@Query('role') role = 1): Promise<AdminRes[]> {
    const admins = await this.adminService.getAdmins(role);
    return admins.map(({ id, name, phoneNumber, studentId }) => ({ id, name, phoneNumber, studentId }));
  }

  @ApiOperation({ summary: '관리자 정보 조회' })
  @ApiOkResponse({ description: '성공', type: AdminRes })
  @Get(':adminId')
  async getAdminById(@Param('adminId') adminId: number): Promise<AdminRes> {
    const admin = await this.adminService.getAdminById(adminId);
    const { id, name, phoneNumber, studentId } = admin;
    return { id, name, phoneNumber, studentId };
  }

  @ApiOperation({ summary: '관리자 정보 수정' })
  @ApiBody({ type: UpdateAdminDTO })
  @ApiOkResponse({ description: '성공', type: Object })
  @Put(':adminId')
  async updateAdmin(@Param('adminId') adminId: number, @Body() updateAdminDto: UpdateAdminDTO) {
    await this.adminService.updateAdmin(adminId, updateAdminDto);
    return {};
  }

  @ApiOperation({ summary: '관리자 탈퇴' })
  @ApiBody({ type: RemoveAdminDTO })
  @ApiOkResponse({ description: '성공', type: Object })
  @Post(':adminId')
  async removeAdminById(@Param('adminId') adminId: number, @Body() removeAdminDto: RemoveAdminDTO) {
    await this.adminService.removeAdminById(adminId, removeAdminDto);
    return {};
  }

  // todo: 이거 한다는건지 만다는건지?
  @ApiOperation({ summary: '관리자 권한 위임' })
  @Post(':adminId/delegation')
  async delegateAdmin(@Param('adminId') adminId: number) {
    return '뭘 눌러보냐';
  }
}

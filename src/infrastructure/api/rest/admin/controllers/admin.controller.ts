import { SWAGGER_TAG_ADMIN } from '@/common/swagger/SwaggerTagS';
import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_ADMIN.tag)
@Controller('admins')
export class AdminController {
  @ApiOperation({ summary: '관리자 등록 요청' })
  @Post('demand')
  demandToAdmin() {
    return;
  }

  @ApiOperation({ summary: '관리자 정보 조회' })
  @Get(':adminId')
  getAdminById() {
    return;
  }

  @ApiOperation({ summary: '관리자 정보 수정' })
  @Put(':adminId')
  updateAdminById() {
    return;
  }

  @ApiOperation({ summary: '관리자 클럽투데이 조회' })
  @Put(':adminId/clubtoday')
  getClubTodayByAdminId() {
    return;
  }

  @ApiOperation({ summary: '관리자 권한 위임' })
  @Post(':adminId/delegation')
  delegateAdmin() {
    return;
  }
}

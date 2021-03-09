import { SWAGGER_TAG_USER } from '@/common/swagger/SwaggerTagS';
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';

@ApiTags(SWAGGER_TAG_USER.tag)
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @ApiOperation({ summary: '사용자 정보 조회' })
  @Get(':userId')
  async getUser(@Param('userId') userId: number) {
    try {
      return await this.usersService.getUser(userId);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @ApiOperation({ summary: '사용자 정보 수정' })
  @Put(':userId')
  async updateUser() {
    return;
  }

  // todo: 참여한 소모임, 작성한 소모임..?
  @ApiOperation({ summary: '사용자 소모임 조회' })
  @Get(':userId/gatherings')
  async getGatheringsByUserId() {
    return;
  }

  @ApiOperation({ summary: '사용자 탈퇴' })
  @Delete(':userId')
  async removeUserById() {
    return;
  }
}

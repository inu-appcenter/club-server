import { RepositoryError } from '@/common/error/RepositoryError';
import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/user.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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

  @ApiOperation({ summary: '사용자 소모임 조회' })
  @Get(':userId/gatherings')
  async getGatheringsByUserId() {
    return;
  }
}

import { RepositoryError } from '@/common/error/RepositoryError';
import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '사용자 정보 조회' })
  @ApiParam({
    name: 'userId',
    required: true,
    description: '유저의 PK 값을 입력합니다.',
    example: 1,
  })
  @Get(':userId')
  async getUser(@Param('userId') userId: number) {
    try {
      return await this.userService.getUser(userId);
    } catch (error) {
      if (error instanceof RepositoryError) {
        // todo: 에러 핸들링
        throw new HttpException(error, HttpStatus.NOT_FOUND);
      }
    }
  }
}

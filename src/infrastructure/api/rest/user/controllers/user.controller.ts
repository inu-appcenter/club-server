import { SWAGGER_TAG_USER } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../models/dto/create.user.dto';
import { UpdateUserDTO } from '../models/dto/update.user.dto';
import { UserRes } from '../models/res/user.res';
import { UserService } from '../services/user.service';

@ApiTags(SWAGGER_TAG_USER.tag)
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @ApiOperation({ summary: '사용자 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateUserDTO })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return;
  }

  @ApiOperation({ summary: '사용자 정보 조회' })
  @ApiOkResponse({ description: '성공', type: UserRes })
  @Get(':userId')
  async getUser(@Param('userId') userId: number): Promise<UserRes> {
    try {
      return await this.usersService.getUser(userId);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @ApiOperation({ summary: '사용자 정보 수정' })
  @ApiOkResponse({ description: '성공' })
  @ApiBody({ type: UpdateUserDTO })
  @Put(':userId')
  async updateUser(@Param('userId') userId: number, @Body() updateUserDto: UpdateUserDTO) {
    return;
  }

  @ApiOperation({ summary: '사용자 탈퇴' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':userId')
  async removeUserById(@Param('userId') userId: number) {
    return;
  }
}

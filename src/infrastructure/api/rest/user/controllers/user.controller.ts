import { SWAGGER_TAG_USER } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDTO } from '../models/dto/create-user.dto';
import { DeleteUserDTO } from '../models/dto/delete-user.dto';
import { UpdateUserDTO } from '../models/dto/update-user.dto';
import { UserRes } from '../models/res/user.res';
import { UserService } from '../services/user.service';

@ApiTags(SWAGGER_TAG_USER.tag)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '사용자 등록' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBody({ type: CreateUserDTO })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    await this.userService.createUser(createUserDto, Math.floor(Date.now() / 1000));
    return {};
  }

  @ApiOperation({ summary: '사용자 정보 조회 ' })
  @ApiOkResponse({ description: '성공', type: UserRes })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  @Get(':userId')
  async getUser(@Param('userId') userId: number): Promise<UserRes> {
    const user = await this.userService.getUser(userId);
    const { id, nickname, studentId } = user;
    return { id, nickname, studentId };
  }

  @ApiOperation({ summary: '사용자 모두 조회 ' })
  @ApiOkResponse({ description: '성공', isArray: true, type: UserRes })
  @Get()
  async getUsers(): Promise<UserRes[]> {
    return (await this.userService.getUsers()).map(({ id, nickname, studentId }) => ({ id, nickname, studentId }));
  }

  @ApiOperation({ summary: '사용자 정보 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  @ApiBody({ type: UpdateUserDTO })
  @Put(':userId')
  async updateUser(@Param('userId') userId: number, @Body() updateUserDto: UpdateUserDTO) {
    await this.userService.updateUser(updateUserDto, userId);
    return {};
  }

  @ApiOperation({ summary: '사용자 탈퇴' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  @ApiBody({ type: DeleteUserDTO })
  @Post(':userId')
  async removeUserById(@Param('userId') userId: number, @Body() deleteUserDto: DeleteUserDTO) {
    await this.userService.removeUser(userId, deleteUserDto);
  }
}

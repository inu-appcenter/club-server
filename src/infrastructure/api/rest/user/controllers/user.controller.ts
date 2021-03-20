import { SWAGGER_TAG_USER } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../models/dto/create-user.dto';
import { UpdateUserDTO } from '../models/dto/update-user.dto';
import { UserRes } from '../models/res/user.res';
import { UserService } from '../services/user.service';

// todo: 에러핸들링 공부하자~
@ApiTags(SWAGGER_TAG_USER.tag)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '사용자 등록' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: CreateUserDTO })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    try {
      // 아직 인증이 없어서 학번을 임시로 작성함
      await this.userService.createUser(createUserDto, Math.floor(Date.now() / 1000));
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOperation({ summary: '사용자 정보 조회 ' })
  @ApiOkResponse({ description: '성공', type: UserRes })
  @Get(':userId')
  async getUser(@Param('userId') userId: number): Promise<UserRes> {
    try {
      const user = await this.userService.getUser(userId);
      return new UserRes(user.id, user.studentId, user.nickname);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @ApiOperation({ summary: '사용자 모두 조회 ' })
  @ApiOkResponse({ description: '성공', isArray: true, type: UserRes })
  @Get()
  async getUsers(): Promise<UserRes[]> {
    try {
      return (await this.userService.getUsers()).map((user) => new UserRes(user.id, user.studentId, user.nickname));
    } catch (error) {
      // 임시
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOperation({ summary: '사용자 정보 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiBody({ type: UpdateUserDTO })
  @Put(':userId')
  async updateUser(@Param('userId') userId: number, @Body() updateUserDto: UpdateUserDTO) {
    try {
      await this.userService.updateUser(updateUserDto, userId);
    } catch (error) {
      // 임시
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOperation({ summary: '사용자 탈퇴' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete(':userId')
  async removeUserById(@Param('userId') userId: number) {
    try {
      await this.userService.removeUser(userId);
    } catch (error) {
      console.error(error);
      // 임시
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}

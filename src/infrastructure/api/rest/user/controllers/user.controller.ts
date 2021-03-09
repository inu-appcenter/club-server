import { SWAGGER_TAG_USER } from '@/common/swagger/SwaggerTags';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../dto/create.user.dto';
import { UpdateUserDTO } from '../dto/update.user.dto';
import { UserService } from '../services/user.service';

@ApiTags(SWAGGER_TAG_USER.tag)
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @ApiOperation({ summary: '사용자 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateUserDTO })
  @Post()
  async createUser(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
    return;
  }

  @ApiOperation({ summary: '사용자 정보 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get(':userId')
  async getUser(@Param('userId') userId: number) {
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
  async updateUser(@Body(ValidationPipe) updateUserDto: UpdateUserDTO) {
    return;
  }

  // todo: 참여한 소모임, 작성한 소모임..?
  @ApiOperation({ summary: '사용자 소모임 조회' })
  @ApiOkResponse({ description: '성공' })
  @Get(':userId/gatherings')
  async getGatheringsByUserId() {
    return;
  }

  @ApiOperation({ summary: '사용자 탈퇴' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':userId')
  async removeUserById() {
    return;
  }
}

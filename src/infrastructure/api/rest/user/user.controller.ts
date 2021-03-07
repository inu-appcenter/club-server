import { Body, Controller, Get, Param } from '@nestjs/common';
import { GetUserDto } from '../dto/user/get.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param() getUserDto: GetUserDto) {
    return await this.userService.getUser(getUserDto);
  }
}

import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UsersService } from './user.service';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {Users as User} from "./entities/user.entity";

@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOperation({ summary: 'get profile' })
  @Get('profile')
  async getProfile(@Req() req: any) {
    const result = await this.userService.findOne(req.userInfo.user._id);
    delete result.password;
    return result;
  }

}

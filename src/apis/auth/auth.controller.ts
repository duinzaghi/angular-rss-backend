import {Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Req} from '@nestjs/common';

import {
  ApiTags,
} from '@nestjs/swagger';
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/create-user.dto";
import {LoginDto} from "./dto/login.dto";
import {UserHelperService} from "./services/user-helper/user-helper.service";
import {UserI} from "./models/user.interface";

@ApiTags('Authentication')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userHelperService: UserHelperService,
  ) {}

  @Post('register')
  async create(@Body() createUserDto: RegisterDto): Promise<UserI> {
    const userEntity: UserI = this.userHelperService.createUserDtoToEntity(createUserDto);
    return this.authService.register(userEntity);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginDto) {
    try{
      const jwt: string = await this.authService.login(loginUserDto);
      return {
        access_token: jwt,
        token_type: 'JWT',
        expires_in: 10000,
      };
    } catch(err){
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }

  }
}

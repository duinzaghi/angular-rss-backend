import { Injectable } from '@nestjs/common';
import { UserI } from '../../models/user.interface';
import {RegisterDto} from "../../dto/create-user.dto";
import {LoginDto} from "../../dto/login.dto";

@Injectable()
export class UserHelperService {
  createUserDtoToEntity(createUserDto: RegisterDto): UserI {
    return {
      email: createUserDto.email,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      password: createUserDto.password,
      passwordConfirm: createUserDto.passwordConfirm,
    };
  }

  loginUserDtoToEntity(loginUserDto: LoginDto): UserI {
    return {
      email: loginUserDto.email,
      password: loginUserDto.password,
    };
  }
}

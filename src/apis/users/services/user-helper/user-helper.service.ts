import { Injectable } from '@nestjs/common';
import { UserI } from '../../models/user.interface';
import {CreateUserDto} from "../../dto/create-user.dto";
import {LoginUserDto} from "../../dto/login.dto";

@Injectable()
export class UserHelperService {
  createUserDtoToEntity(createUserDto: CreateUserDto): UserI {
    return {
      email: createUserDto.email,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      password: createUserDto.password,
      passwordConfirm: createUserDto.passwordConfirm,
    };
  }

  loginUserDtoToEntity(loginUserDto: LoginUserDto): UserI {
    return {
      email: loginUserDto.email,
      password: loginUserDto.password,
    };
  }
}

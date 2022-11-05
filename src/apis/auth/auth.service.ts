import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { UserI } from '../users/models/user.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {InjectRepository} from "@nestjs/typeorm";
import {Users as User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
      private readonly jwtService: JwtService
  ) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  async generateJwt(user: UserI): Promise<string> {
    return this.jwtService.signAsync({ user });
  }

  async verifyJwt(jwt: string): Promise<any> {
    return this.jwtService.verifyAsync(jwt);
  }

  async login(data: LoginDto): Promise<any> {
    try {
      const foundUser: User = await this.usersRepository.findOneBy({email: data.email});
      if (foundUser) {
        const matches: boolean = await this.validatePassword(
            data.password,
            foundUser.password,
        );
        if (matches) {
          const payload: UserI = await this.usersRepository.findOneBy({id: foundUser.id});
          return this.generateJwt(payload);
        } else {
          throw new HttpException(
              'Login was not successfull, wrong credentials',
              HttpStatus.UNAUTHORIZED,
          );
        }
      } else {
        throw new HttpException(
            'Login was not successfull, wrong credentials',
            HttpStatus.UNAUTHORIZED,
        );
      }
    } catch(err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async register(data: UserI)  {
    try {
      const exists: boolean = await this.mailExists(data.email);
      const confirmPassword: boolean = await this.confirm(
          data.password,
          data.passwordConfirm,
      );
      if (!confirmPassword) {
        throw new HttpException('Password not confirm', HttpStatus.BAD_REQUEST);
      }
      if (!exists && confirmPassword) {
        const passwordHash: string = await this.hashPassword(data.password);
        data.password = passwordHash;
        delete data.passwordConfirm;
        const user = await this.usersRepository.save(data);
        delete user.password;
        return user;
      } else {
        throw new HttpException('Email is exited', HttpStatus.BAD_REQUEST);
      }
    } catch(err) {
      throw new HttpException(
          err.message,
          HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async mailExists(email: string): Promise<boolean> {
    try{
      const user = await this.usersRepository.findOneBy({email: email});
      if (user) {
        return true;
      } else {
        return false;
      }
    } catch(err){
      throw new HttpException(
          err.message,
          HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async confirm(
      password: string,
      passwordConfirm: string,
  ): Promise<boolean> {
    return password === passwordConfirm;
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async comparePasswords(
    password: string,
    storedPasswordHash: string,
  ): Promise<any> {
    return bcrypt.compare(password, storedPasswordHash);
  }

  // helper
  private async validatePassword(
      password: string,
      storedPasswordHash: string,
  ): Promise<any> {
    return this.comparePasswords(password, storedPasswordHash);
  }
}

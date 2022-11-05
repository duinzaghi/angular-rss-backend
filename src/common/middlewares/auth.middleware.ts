import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/apis/auth/auth.service';

declare module 'express' {
  export interface Request {
    userInfo: any;
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    // private usersService: UsersService,
    private authService: AuthService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  async use(req: Request, res: Response, next: Function) {
    try {
      const token = req.headers.authorization;
      if(token){
        const tokenValue = token.split(' ')[1];
        const decodedToken = await this.authService.verifyJwt(tokenValue);

        if (decodedToken) {
          req.userInfo = decodedToken;
          next();
        } else {
          throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
        }
      } else {
        throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
      }

    } catch(err) {
      throw new HttpException(err.message, HttpStatus.UNAUTHORIZED);
    }
  }
}

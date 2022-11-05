import { Module } from '@nestjs/common';

// Components
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { JwtAuthGuard } from './jwt/jwt.guard';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthController} from "./auth.controller";
import {UserHelperService} from "./services/user-helper/user-helper.service";
import {Users as User} from "./entities/user.entity";

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRETKEY'),
        signOptions: { expiresIn: '10000s' },
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, UserHelperService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

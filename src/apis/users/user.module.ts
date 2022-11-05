import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {UsersService} from './user.service';
import {AuthModule} from '../auth/auth.module';
import {UserHelperService} from './services/user-helper/user-helper.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users as User} from "./entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        AuthModule
    ],
    controllers: [UserController],
    providers: [UsersService, UserHelperService],
    exports: [UsersService],
})
export class UserModule {
}

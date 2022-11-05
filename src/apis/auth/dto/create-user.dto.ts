import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class RegisterDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    passwordConfirm: string;

}

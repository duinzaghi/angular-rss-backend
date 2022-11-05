import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsString()
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

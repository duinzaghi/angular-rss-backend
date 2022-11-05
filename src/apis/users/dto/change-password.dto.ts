import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class changePasswordDto {
    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    passwordNew: string;

    @ApiProperty()
    @IsNotEmpty()
    passwordConfirm: string;
}

import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateEmployeeDto {
    @ApiProperty()
    headId: number;

    @ApiProperty()
    fullName: string;

    @ApiProperty()
    @IsNotEmpty()
    position: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    mobilePhone: string;

    @ApiProperty()
    skype: string;

    @ApiProperty()
    birthDate: string;

    @ApiProperty()
    hireDate: string;

}

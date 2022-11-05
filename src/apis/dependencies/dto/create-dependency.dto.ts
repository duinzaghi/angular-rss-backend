import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateDependencyDto {
    @ApiProperty()
    @IsNotEmpty()
    predecessorId: number;

    @ApiProperty()
    @IsNotEmpty()
    successorId: number;

    @ApiProperty()
    @IsNotEmpty()
    type: number;

}

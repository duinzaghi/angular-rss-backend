import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateTaskDto {
    @ApiProperty()
    parentId: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    start: string;

    @ApiProperty()
    @IsNotEmpty()
    end: string;

    @ApiProperty()
    progress: number;

}

import {ApiProperty} from "@nestjs/swagger";

export class CreateResourceDto {
    @ApiProperty()
    text: string;
}

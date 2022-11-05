import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    name: string;

}

import {ApiProperty} from "@nestjs/swagger";

export class CreateResourceAssignmentDto {
    @ApiProperty()
    taskId: string;
    @ApiProperty()
    resourceId: string;
}

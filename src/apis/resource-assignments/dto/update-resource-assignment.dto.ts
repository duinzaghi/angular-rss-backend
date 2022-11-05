import { PartialType } from '@nestjs/swagger';
import { CreateResourceAssignmentDto } from './create-resource-assignment.dto';

export class UpdateResourceAssignmentDto extends PartialType(CreateResourceAssignmentDto) {}

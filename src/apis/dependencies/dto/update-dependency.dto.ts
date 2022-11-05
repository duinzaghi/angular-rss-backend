import { PartialType } from '@nestjs/swagger';
import { CreateDependencyDto } from './create-dependency.dto';

export class UpdateDependencyDto extends PartialType(CreateDependencyDto) {}

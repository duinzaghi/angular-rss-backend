import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceAssignmentsService } from './resource-assignments.service';
import { CreateResourceAssignmentDto } from './dto/create-resource-assignment.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiTags('ResourceAssignments')
@ApiBearerAuth()
@Controller({ path: 'resource-assignments', version: '1' })
export class ResourceAssignmentsController {
  constructor(private readonly resourceAssignmentService: ResourceAssignmentsService) {}

  @Post()
  create(@Body() createResourceDto: CreateResourceAssignmentDto) {
    return this.resourceAssignmentService.create(createResourceDto);
  }

  @Get()
  findAll() {
    return this.resourceAssignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceAssignmentService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceAssignmentService.remove(+id);
  }
}

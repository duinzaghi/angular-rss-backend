import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DependenciesService } from './dependencies.service';
import { CreateDependencyDto } from './dto/create-dependency.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiTags('Dependencies')
@ApiBearerAuth()
@Controller({ path: 'dependencies', version: '1' })
export class DependenciesController {
  constructor(private readonly dependencyService: DependenciesService) {}

  @Post()
  create(@Body() createTaskDto: CreateDependencyDto) {
    return this.dependencyService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.dependencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dependencyService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dependencyService.remove(+id);
  }
}

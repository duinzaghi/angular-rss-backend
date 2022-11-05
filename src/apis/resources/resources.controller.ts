import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiTags('Resources')
@ApiBearerAuth()
@Controller({ path: 'resources', version: '1' })
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourcesService.create(createResourceDto);
  }

  @Get()
  findAll() {
    return this.resourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourcesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourcesService.remove(+id);
  }
}

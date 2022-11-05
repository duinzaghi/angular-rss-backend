import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {EmployeesService} from "./employees.service";
import {CreateEmployeeDto} from "./dto/create-employee.dto";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiTags('Employees')
@ApiBearerAuth()
@Controller({ path: 'employees', version: '1' })
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}

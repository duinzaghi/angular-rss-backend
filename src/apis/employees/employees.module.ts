import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Employees as Employee} from "./entities/employee.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee])
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}

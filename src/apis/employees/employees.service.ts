import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Employees as Employee} from "./entities/employee.entity";
import {Repository, UpdateResult} from "typeorm";

@Injectable()
export class EmployeesService {
  constructor(
      @InjectRepository(Employee)
      private employeeRepository: Repository<Employee>,
  ) {}
  async create(data: object)  {
    return await this.employeeRepository.save(data).then(res => res);
  }
  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOneBy({ id });
  }

  async update(id:number, data: object): Promise<Employee | UpdateResult |  undefined> {
    const task = await this.findOne(id).then(res =>res);
    if(task){
      return await this.employeeRepository.update(id, data).then(res => res);
    }
    return;
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}

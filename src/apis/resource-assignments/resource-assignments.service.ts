import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, UpdateResult} from "typeorm";
import {ResourceAssignments as ResourceAssignment} from "./entities/resource-assignment.entity";

@Injectable()
export class ResourceAssignmentsService {
  constructor(
      @InjectRepository(ResourceAssignment)
      private resourceAssignmentRepository: Repository<ResourceAssignment>,
  ) {}
  async create(data: object)  {
    return await this.resourceAssignmentRepository.save(data).then(res => res);
  }
  findAll(): Promise<ResourceAssignment[]> {
    return this.resourceAssignmentRepository.find();
  }

  findOne(id: number): Promise<ResourceAssignment> {
    return this.resourceAssignmentRepository.findOneBy({ id });
  }

  async update(id:number, data: object): Promise<ResourceAssignment | UpdateResult |  undefined> {
    const task = await this.findOne(id).then(res =>res);
    if(task){
      return await this.resourceAssignmentRepository.update(id, data).then(res => res);
    }
    return;
  }

  async remove(id: number): Promise<void> {
    await this.resourceAssignmentRepository.delete(id);
  }
}

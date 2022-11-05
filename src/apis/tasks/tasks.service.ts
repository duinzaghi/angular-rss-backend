import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Tasks as Task} from "../tasks/entities/task.entity";
import {Repository, UpdateResult} from "typeorm";

@Injectable()
export class TasksService {
  constructor(
      @InjectRepository(Task)
      private tasksRepository: Repository<Task>,
  ) {}
  async create(data: object)  {
    return await this.tasksRepository.save(data).then(res => res);
  }
  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOneBy({ id });
  }

  async update(id:number, data: object): Promise<Task | UpdateResult |  undefined> {
    const task = await this.findOne(id).then(res =>res);
    if(task){
      return await this.tasksRepository.update(id, data).then(res => res);
    }
    return;
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}

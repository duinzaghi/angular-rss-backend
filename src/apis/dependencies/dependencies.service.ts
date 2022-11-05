import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Dependencies as Dependency} from "./entities/dependency.entity";
import {Repository, UpdateResult} from "typeorm";

@Injectable()
export class DependenciesService {
  constructor(
      @InjectRepository(Dependency)
      private dependencyRepository: Repository<Dependency>,
  ) {}
  async create(data: object)  {
    return await this.dependencyRepository.save(data).then(res => res);
  }
  findAll(): Promise<Dependency[]> {
    return this.dependencyRepository.find();
  }

  findOne(id: number): Promise<Dependency> {
    return this.dependencyRepository.findOneBy({ id });
  }

  async update(id:number, data: object): Promise<Dependency | UpdateResult |  undefined> {
    const task = await this.findOne(id).then(res =>res);
    if(task){
      return await this.dependencyRepository.update(id, data).then(res => res);
    }
    return;
  }

  async remove(id: number): Promise<void> {
    await this.dependencyRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Resources as Resource} from "./entities/resource.entity";
import {Repository, UpdateResult} from "typeorm";

@Injectable()
export class ResourcesService {
  constructor(
      @InjectRepository(Resource)
      private resourcesRepository: Repository<Resource>,
  ) {}
  async create(data: object)  {
    return await this.resourcesRepository.save(data).then(res => res);
  }
  findAll(): Promise<Resource[]> {
    return this.resourcesRepository.find();
  }

  findOne(id: number): Promise<Resource> {
    return this.resourcesRepository.findOneBy({ id });
  }

  async update(id:number, data: object): Promise<Resource | UpdateResult |  undefined> {
    const task = await this.findOne(id).then(res =>res);
    if(task){
      return await this.resourcesRepository.update(id, data).then(res => res);
    }
    return;
  }

  async remove(id: number): Promise<void> {
    await this.resourcesRepository.delete(id);
  }
}

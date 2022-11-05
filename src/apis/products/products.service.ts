import { Injectable } from '@nestjs/common';
import {Repository, UpdateResult} from "typeorm";
import {Products as Product} from "./entities/product.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ProductsService {
  constructor(
      @InjectRepository(Product)
      private productsRepository: Repository<Product>,
  ) {}
  async create(data: object)  {
    return await this.productsRepository.save(data).then(res => res);
  }
  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }

  async update(id:number, data: object): Promise<Product | UpdateResult |  undefined> {
    const product = await this.findOne(id).then(res =>res);
    if(product){
      return await this.productsRepository.update(id, data).then(res => res);
    }
    return;
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}

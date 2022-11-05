import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Users as User} from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ) {}

  async create(data: object)  {
    return await this.usersRepository.save(data).then(res => res);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
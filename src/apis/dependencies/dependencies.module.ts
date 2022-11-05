import { Module } from '@nestjs/common';
import { DependenciesService } from './dependencies.service';
import { DependenciesController } from './dependencies.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dependencies as Dependency} from "./entities/dependency.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Dependency])
  ],
  controllers: [DependenciesController],
  providers: [DependenciesService]
})
export class DependenciesModule {}

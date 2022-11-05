import { Module } from '@nestjs/common';
import { ResourceAssignmentsService } from './resource-assignments.service';
import { ResourceAssignmentsController } from './resource-assignments.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ResourceAssignments as ResourceAssignment} from "./entities/resource-assignment.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResourceAssignment])
  ],
  controllers: [ResourceAssignmentsController],
  providers: [ResourceAssignmentsService]
})
export class ResourceAssignmentsModule {}

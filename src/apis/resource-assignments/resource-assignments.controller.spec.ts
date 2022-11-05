import { Test, TestingModule } from '@nestjs/testing';
import { ResourceAssignmentsController } from './resource-assignments.controller';
import { ResourceAssignmentsService } from './resource-assignments.service';

describe('ResourceAssignmentsController', () => {
  let controller: ResourceAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceAssignmentsController],
      providers: [ResourceAssignmentsService],
    }).compile();

    controller = module.get<ResourceAssignmentsController>(ResourceAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

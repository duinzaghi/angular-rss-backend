import { Test, TestingModule } from '@nestjs/testing';
import { ResourceAssignmentsService } from './resource-assignments.service';

describe('ResourceAssignmentsService', () => {
  let service: ResourceAssignmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceAssignmentsService],
    }).compile();

    service = module.get<ResourceAssignmentsService>(ResourceAssignmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

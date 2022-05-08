import { Test, TestingModule } from '@nestjs/testing';
import { DocTypesController } from './doc-types.controller';

describe('DocTypesController', () => {
  let controller: DocTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocTypesController],
    }).compile();

    controller = module.get<DocTypesController>(DocTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

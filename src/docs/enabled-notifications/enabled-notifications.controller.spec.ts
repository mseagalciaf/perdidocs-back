import { Test, TestingModule } from '@nestjs/testing';
import { EnabledNotificationsController } from './enabled-notifications.controller';

describe('EnabledNotificationsController', () => {
  let controller: EnabledNotificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnabledNotificationsController],
    }).compile();

    controller = module.get<EnabledNotificationsController>(EnabledNotificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

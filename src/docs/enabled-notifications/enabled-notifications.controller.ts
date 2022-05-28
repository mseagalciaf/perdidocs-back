import { Body, Controller, Post } from '@nestjs/common';
import { EnabledNotificationDto } from '../dto/enabled-notification.dto';
import { NotificationService } from '../services/notification/notification.service';

@Controller('enabled-notifications')
export class EnabledNotificationsController {

    constructor(
        private _notificationService : NotificationService
    ){}

    @Post()
    async create(@Body() enabledNotificationDto: EnabledNotificationDto) {
        return await this._notificationService.create(enabledNotificationDto);
    }
}

import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { EnabledNotificationDto } from '../dto/enabled-notification.dto';
import { GetEnabledNotificationByTokenDto } from '../dto/get-enabled-notification-by-token.dto';
import { UpdateEnabledNotificationDto } from '../dto/update-enabled-notification.dto';
import { NotificationService } from '../services/notification/notification.service';

@Controller('enabled-notifications')
export class EnabledNotificationsController {

    constructor(
        private _notificationService : NotificationService
    ){}

    @Get()
    async findOnes(@Body() data : GetEnabledNotificationByTokenDto ){
        return await this._notificationService.getByRegistryToken(data.registryToken);
    }

    @Post()
    async create(@Body() enabledNotificationDto: EnabledNotificationDto) {
        return await this._notificationService.create(enabledNotificationDto);
    }

    @Put()
    update( @Body() UpdateEnabledNotificationDto: UpdateEnabledNotificationDto) {
        return this._notificationService.update(UpdateEnabledNotificationDto);
    }
}

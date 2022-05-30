import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { EnabledNotificationDto } from '../dto/enabled-notification.dto';
import { GetEnabledNotificationByTokenDto } from '../dto/get-enabled-notification-by-token.dto';
import { UpdateEnabledNotificationDto } from '../dto/update-enabled-notification.dto';
import { NotificationService } from '../services/notification/notification.service';

@Controller('enabled-notifications')
export class EnabledNotificationsController {

    constructor(
        private _notificationService : NotificationService
    ){}

    @Get(':registryToken')
    async findOnes(@Param('registryToken') registryToken: string){
        return await this._notificationService.getByRegistryToken(registryToken);
    }

    @Post()
    async create(@Body() enabledNotificationDto: EnabledNotificationDto, @Res() res : Response ) {
        let enabledNotification = await this._notificationService.getByDocumentByRegistrytoken(enabledNotificationDto);
        if(enabledNotification) return res.status(HttpStatus.BAD_REQUEST).json({'message' : 'notification already exists'});
        return res.send(this._notificationService.create(enabledNotificationDto));
    }

    @Put()
    async update( @Body() UpdateEnabledNotificationDto: UpdateEnabledNotificationDto) {
        return await this._notificationService.update(UpdateEnabledNotificationDto);
    }

    @Delete(':id')
    async delete( @Param('id', ParseIntPipe) id: number ) {
        return await this._notificationService.delete(id);
    }
}

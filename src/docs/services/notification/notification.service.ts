import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocsService } from 'src/docs/docs.service';
import { EnabledNotificationDto } from 'src/docs/dto/enabled-notification.dto';
import { UpdateEnabledNotificationDto } from 'src/docs/dto/update-enabled-notification.dto';
import { EnabledNotification } from 'src/docs/entities/enabled-notifications.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {

    constructor(
        @InjectRepository(EnabledNotification)
        private readonly _enabledNotificationRepository : Repository<EnabledNotification>,
        private readonly _docService : DocsService,
    ){}

    async create(enabledNotificationDto: EnabledNotificationDto) {
        const docType = await this._docService.findDocType(enabledNotificationDto.docTypeId);
        let notification = this._enabledNotificationRepository.create(enabledNotificationDto);
        notification.docType = docType;
        return await this._enabledNotificationRepository.save(notification);
    }

    async getByDocument(docNumber : string, docTypeId : number){
        return await this._enabledNotificationRepository.findBy({docType : { id : docTypeId}, number : docNumber});
    }

    async getByRegistryToken(registryToken : string){
        return await this._enabledNotificationRepository.findBy({registryToken});
    }

    async update(enabledNotification : UpdateEnabledNotificationDto){
        return await this._enabledNotificationRepository.save(enabledNotification);
    }
}

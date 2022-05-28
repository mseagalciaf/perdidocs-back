import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { DocCreatedEvent } from "../events/doc-created.event";
import { NotificationService } from "../services/notification/notification.service";
import * as admin from 'firebase-admin';
import { EnabledNotification } from "../entities/enabled-notifications.entity";

@Injectable()
export class DocCreatedListener{

    constructor(
        private readonly _notificationService : NotificationService
    ){}

    @OnEvent('doc.created')
    handleDocCreatedEvent(event: DocCreatedEvent){
        this._notificationService.getByDocument(event.doc.number,event.doc.docType.id).then((data : EnabledNotification[]) => {
            data.forEach(enabledNotification => {
                if(enabledNotification.viaPush){
                    this.notifyViaPush(enabledNotification.registryToken);
                }
                if (enabledNotification.viaEmail) {
                    // feature not available yet
                }
            });
        });
    }

    notifyViaPush(registryTokenDevice : string){
        admin.messaging().sendToDevice(registryTokenDevice, {
            notification : {
            title : "Han encontrado tu documento!",
            body : "Ingresa a la app y comunícate con esa persona."
            }
        });
    }
}
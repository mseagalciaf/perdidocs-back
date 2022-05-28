import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doc } from "./doc.entity";
import { EnabledNotification } from "./enabled-notifications.entity";

@Entity()
export class DocType {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @OneToMany( () => Doc, (doc) => doc.docType )
    docs : Doc[];

    @OneToMany( () => EnabledNotification, (enabledNotification) => enabledNotification.docType )
    enabledNotifications : EnabledNotification[];
}
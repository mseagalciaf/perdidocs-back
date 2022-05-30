import { DocType } from "src/docs/entities/doc-type.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EnabledNotification{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    registryToken : string;

    @Column({nullable : true})
    email : string;

    @ManyToOne( () => DocType, docType => docType.docs)
    @JoinColumn({name : 'docTypeId'})
    docType : DocType;

    @Column()
    number : string;

    @Column({default : true})
    viaEmail : boolean

    @Column({default : true})
    viaPush : boolean
}
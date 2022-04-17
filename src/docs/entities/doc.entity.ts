
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DocType } from "./doc-type.entity";

@Entity()
export class Doc {

    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( () => DocType, docType => docType.docs)
    @JoinColumn({name : 'docTypeId'})
    docType : DocType;

    @Column()
    number : string;

    @Column()
    phone : string;

    @Column({nullable : true})
    delivered : Date;

    @Column()
    created_at : Date;

    @ManyToOne( () => User, user => user.docs)
    user : User;


}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doc } from "./doc.entity";

@Entity()
export class DocType {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @OneToMany( () => Doc, (doc) => doc.docType )
    docs : Doc[];
}
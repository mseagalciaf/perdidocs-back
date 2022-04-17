import { Doc } from "src/docs/entities/doc.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column({unique : true})
    email : string;

    @Column()
    password : string;

    @OneToMany( () => Doc , docs => docs.user)
    docs : Doc[];
}

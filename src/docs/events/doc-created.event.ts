import { DocType } from "../entities/doc-type.entity";
import { Doc } from "../entities/doc.entity";

export class DocCreatedEvent{
    constructor(
        public doc : Doc
    ){}
}
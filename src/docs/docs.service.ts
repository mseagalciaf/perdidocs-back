import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import { DocType } from './entities/doc-type.entity';
import { Doc } from './entities/doc.entity';

@Injectable()
export class DocsService {

  constructor(
    @InjectRepository(Doc)
    private readonly docRepository : Repository<Doc>,
    @InjectRepository(DocType)
    private readonly docTypeRepository : Repository<DocType>
  ){}
    
  async create(createDocDto: CreateDocDto) {
    const docType = await this.findDocType(createDocDto.docTypeId);
    let doc = this.docRepository.create(createDocDto);
    doc.docType = docType; 
    doc.created_at = new Date();
    return await this.docRepository.save(doc);
  }

  async findAll() : Promise<Doc[]> {
    return await this.docRepository.find();
  }

  async findOne(id: number) {
    return await this.docRepository.findOne({where : Doc[id] });
  }

  async findDocType(id:number){
    return await this.docTypeRepository.findOneOrFail({where : {id} });
  }

  async search(typeId:number,number:string){
    return await this.docRepository.findOne({where : { docType : {id : typeId}, number },order : { created_at : 'DESC' }});
  }

  update(id: number, updateDocDto: UpdateDocDto) {
    return `This action updates a #${id} doc`;
  }

  remove(id: number) {
    return `This action removes a #${id} doc`;
  }
}

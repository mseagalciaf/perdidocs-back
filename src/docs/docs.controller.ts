import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';

@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  @Post()
  async create(@Body() createDocDto: CreateDocDto) {
    return await this.docsService.create(createDocDto);
  }

  @Get()
  async findAll() {
    return await this.docsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.docsService.findOne(+id);
  }

  @Get('/search/:type/:number')
  async findDocument(@Param('type') type : number, @Param('number') number : string, @Res() res: Response){
    let doc = await this.docsService.search(type,number);
    if(doc) return  res.send(doc);
    return res.status(HttpStatus.NOT_FOUND).send('the document is not in Database yet.');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocDto: UpdateDocDto) {
    return this.docsService.update(+id, updateDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docsService.remove(+id);
  }
}

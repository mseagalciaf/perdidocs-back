import { Controller, Get } from '@nestjs/common';
import { DocsService } from '../docs.service';

@Controller('docTypes')
export class DocTypesController {

    constructor(private readonly docsService: DocsService) {}

    @Get()
    async findAll() {
        return await this.docsService.findAllDocTypes();
    }
}

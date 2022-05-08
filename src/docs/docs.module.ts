import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doc } from './entities/doc.entity';
import { User } from 'src/users/entities/user.entity';
import { DocType } from './entities/doc-type.entity';
import { DocTypeExistsRule } from './customValidators/doc-type-exists-rule';
import { DocTypesController } from './doc-types/doc-types.controller';

@Module({
  imports : [TypeOrmModule.forFeature([Doc,DocType,User])],
  controllers: [DocsController, DocTypesController],
  providers: [DocsService,DocTypeExistsRule],
  exports : [TypeOrmModule]
})
export class DocsModule {}

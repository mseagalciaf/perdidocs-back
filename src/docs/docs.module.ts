import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doc } from './entities/doc.entity';
import { User } from 'src/users/entities/user.entity';
import { DocType } from './entities/doc-type.entity';
import { DocTypeExistsRule } from './customValidators/doc-type-exists-rule';
import { DocTypesController } from './doc-types/doc-types.controller';
import { DocCreatedListener } from './listeners/doc-created.listener';
import { UsersModule } from 'src/users/users.module';
import { EnabledNotification } from './entities/enabled-notifications.entity';
import { NotificationService } from './services/notification/notification.service';
import { EnabledNotificationsController } from './enabled-notifications/enabled-notifications.controller';

@Module({
  imports : [
    TypeOrmModule.forFeature([Doc,DocType,User,EnabledNotification]),
  ],
  controllers: [DocsController, DocTypesController,EnabledNotificationsController],
  providers: [DocsService,DocTypeExistsRule,DocCreatedListener,NotificationService],
  exports : [TypeOrmModule]
})
export class DocsModule {}

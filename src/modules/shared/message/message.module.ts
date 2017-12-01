import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MessageProviders } from './message.providers';
import { MessageService } from './message.service';

@Module({
    modules: [DatabaseModule],
    components: [
        ...MessageProviders,
        MessageService,
    ],
    exports: [
        MessageService
    ]
})
export class MessageModule { }

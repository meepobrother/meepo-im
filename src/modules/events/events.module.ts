import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

import { SharedModule } from '../shared/shared.module';

@Module({
    modules: [
        SharedModule
    ],
    components: [
        EventsGateway
    ],
})
export class EventsModule { }
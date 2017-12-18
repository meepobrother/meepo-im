import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Module({
    modules: [],
    components: [
        EventsGateway
    ],
})
export class EventsModule { }
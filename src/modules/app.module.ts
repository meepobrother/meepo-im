import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsModule } from './events/events.module';

@Module({
  modules: [
    EventsModule,
  ],
  controllers: [],
  components: [
    AppController
  ],
})
export class ApplicationModule {}

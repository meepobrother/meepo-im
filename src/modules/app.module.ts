import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { EventsModule } from './events/events.module';

@Module({
  modules: [
    EventsModule,
    SharedModule
  ],
  controllers: [
    AppController
  ],
  components: [],
})
export class ApplicationModule {}

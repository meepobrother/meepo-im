import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { EventsModule } from './events/events.module';

@Module({
  modules: [
    EventsModule,
    SharedModule
  ],
  controllers: [],
  components: [
    AppController
  ],
})
export class ApplicationModule {}

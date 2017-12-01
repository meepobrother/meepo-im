import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { EventsModule } from './events/events.module';

@Module({
  modules: [
    AuthModule,
    EventsModule,
    SharedModule
  ],
  controllers: [
    AppController
  ],
  components: [],
})
export class ApplicationModule {}

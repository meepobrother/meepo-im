import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { MessageModule } from './message/message.module';



@Module({
  modules: [
      MemberModule,
      MessageModule
  ],
  controllers: [],
  components: [],
  exports: [
    MemberModule,
    MessageModule
  ]
})
export class SharedModule {}

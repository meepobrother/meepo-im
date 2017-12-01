import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';

@Module({
  modules: [
      MemberModule,
  ],
  controllers: [],
  components: [],
  exports: [
    MemberModule
  ]
})
export class SharedModule {}

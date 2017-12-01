import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MemberProviders } from './member.providers';
import { MemberService } from './member.service';

@Module({
    modules: [DatabaseModule],
    components: [
        ...MemberProviders,
        MemberService,
    ],
    exports: [
        MemberService
    ]
})
export class MemberModule { }

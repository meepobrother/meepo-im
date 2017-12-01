import { Connection, Repository } from 'typeorm';
import { Member } from './member.entity';

export const MemberProviders = [
    {
        provide: 'PhotoRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Member),
        inject: ['DbConnectionToken'],
    },
];

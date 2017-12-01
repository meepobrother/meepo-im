import { Connection, Repository } from 'typeorm';
import { Message } from './message.entity';

export const MessageProviders = [
    {
        provide: 'PhotoRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Message),
        inject: ['DbConnectionToken'],
    },
];

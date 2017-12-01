import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Component()
export class MessageService {
    constructor(
        @Inject('PhotoRepositoryToken') private readonly repository: Repository<Message>
    ) { }
}

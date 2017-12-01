import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Component()
export class MemberService {
    constructor(
        @Inject('PhotoRepositoryToken') private readonly repository: Repository<Member>
    ) { }

    async findAll(): Promise<Member[]> {
        return await this.repository.find();
    }

    async getMyFriend(): Promise<Member[]> {
        return await this.repository.find({ where: { uniacid: 15 }, take: 5 });
    }

    async getInfoByMobile(mobile: string): Promise<Member> {
        return await this.repository.findOne({ mobile: mobile });
    }

    async getInfoByOpenid(openid: string): Promise<Member> {
        return await this.repository.findOne({ openid: openid });
    }

    async getInfoById(id: string): Promise<Member> {
        return await this.repository.findOneById(id);
    }
}

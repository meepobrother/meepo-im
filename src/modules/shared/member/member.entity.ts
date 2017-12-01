import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ims_imeepos_runner3_member')
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'nickname'
    })
    username: string;

    @Column()
    avatar: string;

    @Column()
    openid: string;

    @Column()
    mobile: string;
    
    @Column()
    status: string;

    @Column()
    uniacid: number;
}
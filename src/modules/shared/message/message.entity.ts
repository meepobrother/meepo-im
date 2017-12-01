import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ims_imeepos_runner3_im_message')
export class Message {
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
    type: string;

    @Column()
    cid: string;
    
    @Column()
    content: string;
}
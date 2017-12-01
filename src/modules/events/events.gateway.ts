import {
    WebSocketGateway,
    SubscribeMessage,
    WebSocketServer,
    WsException,
    WsResponse,
    IoAdapter,
    OnGatewayConnection
} from '@nestjs/websockets';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { layimConfig } from '../_mock/layimConfig';
import { MemberService } from '../shared/member/member.service';
import { MessageService } from '../shared/message/message.service';
import * as uuid from 'uuid';

let clients = {};

@WebSocketGateway(8001)
export class EventsGateway {
    constructor(
        public member: MemberService,
        public message: MessageService
    ) { }

    @WebSocketServer() server;

    @SubscribeMessage('im.init')
    async onInit(client, data): Promise<any> {
        const event = 'im.init.success';
        const myinfo = await this.member.getInfoByOpenid(data);
        if (myinfo) {
            myinfo.avatar = './images/face/' + myinfo.avatar + '.gif';
        }
        clients[data] = client;
        const friend = await this.member.getMyFriend();
        friend.map(res => {
            res.avatar = './images/face/' + res.avatar + '.gif';
        });
        return {
            event: event,
            data: {
                title: '米波在线聊天插件',
                chatTitleColor: "#36373C",
                isAudio: true,
                isVideo: true,
                notice: true,
                copyright: '米波网络科技',
                uploadImage: {
                    url: '/upload/image',
                    type: ''
                },
                uploadFile: {
                    url: '/upload/file',
                    type: ''
                },
                // brief: true,
                init: {
                    mine: myinfo,
                    friend: [{
                        groupname: '我的朋友',
                        list: friend
                    }],
                    group: []
                },
                tool: [],
                moreList: [],
                isgroup: true
            }
        };
    }

    @SubscribeMessage('message.send')
    onMessageSend(client, data) {
        const event = 'message.send.success';
        const event2 = 'message.recive';
        let mine = data.mine;
        let to = data.to;
        let im = {
            content: mine.content,
            type: 'friend',
            avatar: mine.avatar,
            username: mine.username,
            id: to.id,
            mine: false,
            fromid: mine.id,
            timestamp: new Date().getTime()
        };
        clients[to.id].emit(event2, im);
    }
}

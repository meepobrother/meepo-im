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
import { MemberService } from '../shared/member/member.service';
import * as uuid from 'uuid';

var clients = {};
var users = {};

@WebSocketGateway(8001)
export class EventsGateway {
    constructor(
        public member: MemberService
    ) { }

    @WebSocketServer() server;

    @SubscribeMessage('im.init')
    onInit(client, user) {
        clients[user.openid] = client;
        users[user.openid] = user;
        console.log(users);
        client.emit('im.init.success', users);
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
        clients[to['openid']].emit(event2, im);
    }
    // 下线通知
    @SubscribeMessage('disconnect')
    onDisconnected(client, openid) {
        clients[openid] = null;
        client.broadcast.emit('disconnect', users[openid]);
    }
}

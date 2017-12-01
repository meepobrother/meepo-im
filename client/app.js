layui.config({
    version: true
}).use('mobile', function() {
    var mobile = layui.mobile,
        layim = mobile.layim,
        layer = mobile.layer,
        autoReplay = [],
        layimConfig = {};
    socket.on('im.init.success', function(data) {
        if (data) {
            console.log(data);
            layim.config(data);
        }
    });
    //监听自定义工具栏点击，以添加代码为例
    layim.on('tool(code)', function(insert, send) {
        insert('[pre class=layui-code]123[/pre]'); //将内容插入到编辑器
        send();
    });
    //监听发送消息
    layim.on('sendMessage', function(data) {
        console.log('sendMessage', data);
        socket.emit('message.send', data);
    });
    socket.on('message.recive', function(msg) {
        console.log('message.recive', msg);
        layim.getMessage(msg);
    });

});

const socket = io('http://localhost:8001');
socket.on('connect', function() {
    socket.emit('im.init', openid);
});
socket.on('disconnect', function() {
    console.log('Disconnected');
});
socket.on('member.online', function(data) {
    console.log('member.online', data);
});
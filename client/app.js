layui.config({
    version: true
}).use('mobile', function() {
    var mobile = layui.mobile,
        layim = mobile.layim,
        layer = mobile.layer,
        autoReplay = [],
        layimConfig = {};
    const socket = io('https://meepo.com.cn');
    socket.on('im.init.success', function(data) {
        layim.config(data);
    });
    layim.on('sendMessage', function(data) {
        socket.emit('message.send', data);
    });
    socket.on('connect', function() {
        socket.emit('im.init', openid);
    });
    socket.on('disconnect', function() {
        socket.emit('disconnect', openid);
    });
    // 上线
    socket.on('member.online', function(data) {
        console.log('member.online', data);
    });
    // 接收消息
    socket.on('message.recive', function(msg) {
        layim.getMessage(msg);
    });
    socket.on();
});
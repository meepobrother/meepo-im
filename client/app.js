layui.config({
    version: true
}).use('mobile', function() {
    var mobile = layui.mobile,
        layim = mobile.layim,
        layer = mobile.layer,
        autoReplay = [],
        layimConfig = config;
    const socket = io('http://localhost:8001');
    layim.config(layimConfig);
    socket.on('im.init.success', function(data) {
        layim.config(data); 
        localStorage.imConfig=JSON.stringify(data);
    });
    layim.on('sendMessage', function(data) {
        socket.emit('message.send', data);
    });
    socket.on('connect', function() {
        socket.emit('im.init', user);
    });
    socket.on('disconnect', function() {
        socket.emit('disconnect', user);
    });
    // 上线
    socket.on('member.online', function(data) {
        console.log('member.online', data);
    });
    // 接收消息
    socket.on('message.recive', function(msg) {
        layim.getMessage(msg);
    });
});
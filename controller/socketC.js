/************************
 * websocket处理
 */

const socket_config = require('../config').socket_config

// const server = require('http').createServer();


// const io = require('socket.io')(server, socket_config);
// server.listen(socket_config.port);


//git commit test
//git commit test2
//git commit test3
//git commit test4
//git commit test5



module.exports = function(http) {
    const io = require('socket.io')(http);

    let user_cnt = 0;
    io.on('connection', function(socket) {
        if (socket.request.cookies) {
            let sid = socket.request.cookies.s_id;
            console.log(sid);
        }
            console.log(socket.handshake.query);

        var id = ++user_cnt;
        console.log('connect,user_cnt:' + user_cnt);
        let user_data = {
            id: id,
        }
        socket.emit('user_data', JSON.stringify(user_data));
        io.emit('message', 'user' + user_cnt + ':connect');
        socket.on('message', function(data) {
            console.log(socket.request.query);
            data = JSON.parse(data);
            console.log(data);
            io.emit('message', 'user' + data.id + ':' + data.text);
        })

        socket.on('disconnect', function(data) {
            console.log('disconnect');
            console.log(socket.id);
            io.emit('message', 'a user disconnect');
        })
    });

}

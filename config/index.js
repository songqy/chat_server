/**
 * koa test 配置
 */



const server_config = {
    host: '127.0.0.1',
    port: 3000,
    name: 'koa test',
}


const socket_config = {
    port: 3001,
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
}


module.exports.server_config = server_config;
module.exports.socket_config = socket_config;

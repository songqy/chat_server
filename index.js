/**
 * koa test 入口文件
 */

const koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const WebSocket = require("koa-websocket");

const router = require('./routes');
// const socketRoutes = require('./routes/socketRoutes');
const config = require('./config').server_config;

const app = new koa();

const http = require('http').createServer(app.callback());

// 全局异常处理
app.use(async(ctx, next) => {
    console.log(ctx.path);
    try {
        await next();
        if (ctx.status === 404) ctx.throw(404);
    } catch (err) {
        console.error(err);
        ctx.status = err.status || 500;
        // return ctx.body = err.stack; //打印调用栈
        return ctx.body = err.message; //打印错误信息
    }
})

require('./controller/socketC')(http);

app.use(bodyParser());

app.use(router.routes());


http.listen(config.port, () => {
    console.log("You can debug your app with http://" + config.host + ':' + config.port);
});

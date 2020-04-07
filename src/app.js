// const Koa = require('koa');
import Koa from 'koa';
const app = new Koa();
const linkMongo = require('./config/mongo');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');
// const router = require('./router/index.js');
import router from './router/index.js'

const start = async () => {
    // 连接mongodb
    await linkMongo()
    // 路由
    app.use(router.routes());
    // post请求参数处理
    app.use(bodyparser())
    // 跨域
    app.use(cors({
        origin: '*',
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
    // 端口号 
    app.listen(3000);
}

start()
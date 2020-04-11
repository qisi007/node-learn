import Koa from 'koa';
import linkMongo from'./config/mongo';
import bodyparser from'koa-bodyparser';
import cors from'koa2-cors';
import router from './router/swagger.js'



const app = new Koa();

const start = async () => {
    // 连接mongodb
    await linkMongo()
    // 路由
    app.use(router.routes());
    app.use(router.allowedMethods());
    // post请求参数处理
    app.use(bodyparser());
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
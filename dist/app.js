"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = require("koa");
const mongo_1 = require("./config/mongo");
const koa_bodyparser_1 = require("koa-bodyparser");
const koa2_cors_1 = require("koa2-cors");
const swagger_js_1 = require("./router/swagger.js");
let a = '333';
const app = new koa_1.default();
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // 连接mongodb
    yield mongo_1.default();
    // post请求参数处理
    app.use(koa_bodyparser_1.default());
    // 路由
    app.use(swagger_js_1.default.routes());
    app.use(swagger_js_1.default.allowedMethods());
    // 跨域
    app.use(koa2_cors_1.default({
        origin: '*',
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }));
    // 端口号 
    app.listen(3000);
});
start();

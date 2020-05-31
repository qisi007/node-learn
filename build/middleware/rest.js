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
exports.rest = void 0;
const ERRORLIST = new Map([
    ['SERVICE_ERROR', { status: 500, message: "服务器错误" }],
    ['T_ERROR', { status: 10002, message: "技术出错了,请联系技术人员" }],
    ['DATA_ERROR', { status: 400, message: "数据错误" }],
]);
/**
 * @name rest错误返回中间件
 * @author liuguisheng
 * @version 2020-05-29 14:43:30 星期五
 */
exports.rest = function () {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            // 请求成功返回查询数据
            yield next();
            ctx.body = {
                status: "200",
                message: "成功",
                result: ctx.body
            };
        }
        catch (err) {
            // 捕获异常,从定义的错误列表中查找错误信息返回
            let { status, message } = ERRORLIST.get(err.message);
            ctx.body = {
                status,
                message
            };
        }
    });
};

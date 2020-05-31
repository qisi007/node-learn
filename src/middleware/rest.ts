import { Context } from "koa-swagger-decorator";

const ERRORLIST: Map<string, object> = new Map([
    ['SERVICE_ERROR',{ status: 500, message: "服务器错误"}],
    ['T_ERROR',{ status: 10002, message: "技术出错了,请联系技术人员"}],
    ['DATA_ERROR',{ status: 400, message: "数据错误"}],
])

/**
 * @name rest错误返回中间件
 * @author liuguisheng
 * @version 2020-05-29 14:43:30 星期五
 */

export const rest =  function () {
    return async (ctx: Context, next: Function) =>{
        try {
            // 请求成功返回查询数据
            await next();
            ctx.body = {
                status: "200",
                message: "成功",
                result: ctx.body
            }
    
        } catch (err) {
            // 捕获异常,从定义的错误列表中查找错误信息返回
            let {status, message } = ERRORLIST.get(err.message) as any;
            ctx.body = {
                status,
                message
            }
        }
    }
}
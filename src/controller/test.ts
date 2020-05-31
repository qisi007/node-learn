import { request, summary,Context, query, params, path, body, description, tags } from "koa-swagger-decorator";
import { Test } from "../service/index";
let test = new Test();


const tag = tags(['测试']);



export default class Text {
    @request('get', '/getData')
    @summary('测试')
    @tag
    static async getData ( ctx: Context ) {
        ctx.body =  await test.getList()
    }


    @request('post', '/postData')
    @summary('测试')
    @body({
        aaa: {type: "string"},
        bbb: {type: "string"}
    })
    @tag
    static async postData ( ctx: Context ) {
        console.log(ctx.request.body)
        ctx.body = {aaa: 111, bbb: 222}
    }

    @request('get', '/insertData')
    @summary('添加数据')
    @tag
    static async insertData () {
        ctx.body = await test.insertData()
    }
}
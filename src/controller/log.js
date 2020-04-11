const demo = require('../service/index');

import { request, summary, query, path, body, tags, params } from 'koa-swagger-decorator';

const logTag = tags(['log']);

let table = {
    name: {type: 'string'},
    content: {type: 'string'},
    date: {type: 'string'}
}

const idQuery = {id: {type: "string"}}

export default class Log {
    @request('get', '/getHeader')
    @summary('获取表头')
    @logTag
    static async getHeader ( ctx ) {
        let result = await demo.findHeader();
        ctx.body = result;
    }

    @request('post', '/addData')
    @summary('添加表格数据')
    @body(table)
    @logTag
    static async addTableData ( ctx ) {
        let { name, content, date } = ctx.request.body;
        let result = await demo.setData(name, content, date);
        ctx.body = result; 
    }

    @request('delete', '/deleteData')
    @summary('删除表格数据')
    @query(idQuery)
    @logTag
    static async deleteData ( ctx ) {
        let { id } = ctx.query;
        let result = await demo.deleteData(id);
        ctx.body = result;
    }


    @request('post', '/updataData')
    @summary('更新数据')
    @body(table)
    @logTag
    static async updataData ( ctx ) {
        let { id, name, content, date } = ctx.request.body;
        let result = await demo.updataData(id, name, content, date);
        ctx.body = result;
    }

    @request('post', '/getTable')
    @summary('获取表格数据')
    @query({page: {type: 'number'},size: {type: 'number'}})
    @body(table)
    @logTag
    static async getTable ( ctx ) {
        let { page, size } = ctx.query;
        let search = ctx.request.body;
        let result = await demo.getTable(page, size, search);
        ctx.body = result;
    }
}

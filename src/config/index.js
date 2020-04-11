const demo = require('../service/index');


/**
 * @name 获取表头数据
 * 
 * 
*/

const getHeader = async (ctx, next) => {
    await next();
    let result = await demo.findHeader();
    ctx.body = result;
}

/**
 * @name 添加数据
 * 
 * 
*/

const addData = async (ctx, next ) => {
    await next();
    let { name, content, date } = ctx.request.body;
    let result = await demo.setData(name, content, date);
    ctx.body = result;
}


/**
 * @name 删除数据
 * 
 * 
*/
const deleteData = async ( ctx, next ) => {
    await next();
    let { id } = ctx.query;
    let result = await demo.deleteData(id);
    ctx.body = result;

}

/**
 * @name 更新数据
 * 
 * 
*/

const updataData = async ( ctx, next ) => {
    await next();
    let { id, name, content, date } = ctx.request.body;
    let result = await demo.updataData(id, name, content, date);
    ctx.body = result;
}

/**
 * @name 获取表格
 * 
 * 
*/
const getTable = async ( ctx, next ) => {
    await next();
    let { page, size } = ctx.query;
    let search = ctx.request.body;
    let result = await demo.getTable(page, size, search);
    ctx.body = result;
}

module.exports = {
    getHeader,
    addData,
    deleteData,
    updataData,
    getTable
}
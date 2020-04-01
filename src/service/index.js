const { HeaderModel,TableModel } = require('../models/index');


const status = {
    code: 200,
    message: '成功'
}

/**
 * @name 查询表头
 * 
 * 
*/
const findHeader = async () => {
    let result = await HeaderModel.find({})
    return {
        result,
        status
    }
}

/**
 * @name 添加数据
 * 
 * 
*/
const setData = async (name, content, date) => {
    await TableModel.create({name, content, date});
    return status;
}

/**
 * @name 删除数据
 * 
 * 
*/
const deleteData = async ( id ) => {
    await TableModel.deleteOne({_id:id});
    return status
}

/**
 * @name 更新数据
 * 
 * 
*/

const updataData = async (id, name, content, date ) => {
    await TableModel.update({_id: id}, {name, content, date});
    return status;
}

/**
 * @name 获取表格
 * 
 * 
*/
const getTable = async ( page, size, search ) => {
    let result = await TableModel.find(search, null, {limit:Number(size),skip:size*page});
    let count = await TableModel.countDocuments({});
    return {
        result,
        status,
        pageInfo: { page,size,count }
    }
}

module.exports  = {
    findHeader,
    setData,
    deleteData,
    updataData,
    getTable
}
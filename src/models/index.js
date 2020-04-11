import mongoose from 'mongoose'


/**
 * @name 表头
 * 
 * 
*/
const HeaderSchema = new mongoose.Schema({
    name: {type: String},
    prop: { type: String},
    width: { type: Number},
});
const HeaderModel = mongoose.model('header', HeaderSchema);

/**
 * @name 表格数据
 * 
 * 
*/

const TableSchema = new mongoose.Schema({
    name: {type: String},
    content: { type: String},
    date: { type: String, default: new Date()},
})

const TableModel = mongoose.model('table', TableSchema);


export {
    HeaderModel,
    TableModel
}

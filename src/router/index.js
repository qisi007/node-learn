const koaRouter = require('koa-router');
const router = koaRouter();

// const swagger = require('./swagger');
// console.log(swagger.router())

// router.use(swagger.router());

const demo = require('../controller/index')

// 获取表头
router.get('/getHeader', demo.getHeader);


// 添加表格数据
router.post('/addData', demo.addData);

// 删除表格数据
router.delete('/deleteData/', demo.deleteData);

// 更新数据
router.post('/updataData', demo.updataData);

// 获取表格数据
router.post('/getTable', demo.getTable)


module.exports = router;
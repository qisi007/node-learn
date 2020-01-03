const koaRouter = require('koa-router');
const router = koaRouter();

const user = require('../controller/index')


router.get('/findAll', user.findAllUser);

module.exports = router;
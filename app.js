const Koa = require('koa');
const app = new Koa();



app.use(require('./router/index.js').routes());
app.listen(3000);
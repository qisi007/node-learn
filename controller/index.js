const user = require('../service/index');

const findAllUser = async ctx => {
    let data = ctx.request.body;
    let result = await user.findAllUser();
    ctx.body = result;

}

module.exports = {
    findAllUser
}
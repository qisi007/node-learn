exports.restfullApi = async function (ctx, next) {
    try {
        await next();
    } catch (error) {
        ctx.body = {statusCode: error.stausCode, message: error.message}
    }
}
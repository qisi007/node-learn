const mongoose = require('mongoose');
const config = require('./db.config.js');

const linkMongodb = async () => {
    await mongoose.connect( config.host + ':' + config.port + '/' + config.database,{ useNewUrlParser: true, useUnifiedTopology: true});

    await mongoose.connection.on("error", err => {
        console.log("数据库连接失败", err)
    })

    await mongoose.connection.on("open", () => {
        console.log("数据库连接成功")
    })
}

module.exports = linkMongodb


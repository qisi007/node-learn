import mongoose from "mongoose";

/**
 * @name mongo数据库连接
 * @description 
 * @param { String } host 主机地址
 * @param { String } port 端口号
 * @param { String } database 数据库名称
 * @author liuguisheng
 * @version 2020-05-29 14:45:19 星期五
 */

export class MongoDb {
    host: string;
    port: string;
    database: string;

    constructor ( host: string, port: string, database: string ) {
        this.host = host;
        this.port = port;
        this.database = database;
    }
    /**
     * @name 开始连接
     * @author liuguisheng
     * @version 2020-05-29 14:46:22 星期五
     */
    
    async link () {
        // 获取数据库配置
        let { host, port, database } = this;
        // 拼接数据库连接地址
        let url: string = `${host}:${port}/${database}`;
        // 必要的配置字段
        let config: object = {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        };
        // 开始连接
        try {
            await mongoose.connect(url,config);
            console.log("mongo连接成功");
        }catch {
            console.log("mongo连接失败");
        }
    }

}
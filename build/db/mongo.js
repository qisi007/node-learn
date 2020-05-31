"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * @name mongo数据库连接
 * @description
 * @param { String } host 主机地址
 * @param { String } port 端口号
 * @param { String } database 数据库名称
 * @author liuguisheng
 * @version 2020-05-29 14:45:19 星期五
 */
class MongoDb {
    constructor(host, port, database) {
        this.host = host;
        this.port = port;
        this.database = database;
    }
    /**
     * @name 开始连接
     * @author liuguisheng
     * @version 2020-05-29 14:46:22 星期五
     */
    link() {
        return __awaiter(this, void 0, void 0, function* () {
            // 获取数据库配置
            let { host, port, database } = this;
            // 拼接数据库连接地址
            let url = `${host}:${port}/${database}`;
            // 必要的配置字段
            let config = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
            // 开始连接
            try {
                yield mongoose_1.default.connect(url, config);
                console.log("mongo连接成功");
            }
            catch (_a) {
                console.log("mongo连接失败");
            }
        });
    }
}
exports.MongoDb = MongoDb;

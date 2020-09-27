"use strict";
/**
 * @name 项目配置目录
 * @author liuguisheng
 * @version 2020-05-29 14:47:48  星期五
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectConfig = void 0;
class ProjectConfig {
    constructor() {
        this.port = "3000";
        this.db = {
            database: "test",
            username: "",
            password: "",
            host: "mongodb://127.0.0.1",
            port: "27017"
        };
        this.eureka = {
            host: "http://192.168.10.200",
            port: "1025",
            servicePath: "eureka/apps/",
            username: "admin",
            password: "admin",
            serviceName: "LGSServer"
        };
    }
}
const projectConfig = new ProjectConfig();
exports.projectConfig = projectConfig;

/**
 * @name 项目配置目录
 * @author liuguisheng
 * @version 2020-05-29 14:47:48  星期五
 */


class ProjectConfig  {
    public readonly  port: string = "3000"
    public readonly db = {
        database: "test",
        username: "",
        password: "",
        host: "mongodb://127.0.0.1",
        port: "27017"
    }
    public readonly eureka = {
        host: "http://192.168.10.200",
        port: "1025",
        servicePath: "eureka/apps/",
        username: "admin",
        password: "admin",
        serviceName: "LGSServer"

    }
}

const projectConfig = new ProjectConfig();

export {
    projectConfig
}
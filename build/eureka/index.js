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
exports.EurekaService = exports.CLIENT = void 0;
const eureka_js_client_1 = __importDefault(require("eureka-js-client"));
const config_1 = require("../config/config");
const utils_1 = require("../util/utils");
// 获取eureka配置信息
const { host, port, servicePath, username, password, serviceName } = config_1.projectConfig.eureka;
// 获取ip4
const IP4 = utils_1.getIp4();
// eureka集群地址
const EUREKA_URL = `${host}:${port}/${servicePath}`;
let Eurekas = eureka_js_client_1.default;
// eurake客户端
exports.CLIENT = new Eurekas({
    instance: {
        instanceId: `${IP4}:${port}`,
        app: serviceName,
        hostName: IP4,
        ipAddr: IP4,
        vipAddress: serviceName,
        port: { '$': port, '@enabled': true },
        statusPageUrl: `http://${IP4}:${port}/info`,
        healthCheckUrl: `http://${IP4}:${port}/health`,
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        }
    },
    eureka: {
        serviceUrls: {
            default: [
                EUREKA_URL
            ]
        }
    },
    requestMiddleware: (requestOpts, done) => {
        requestOpts.auth = {
            user: username,
            password
        };
        done(requestOpts);
    }
});
/**
 * @name eureka服务
 * @author liuguisheng
 * @version 2020-05-29 16:57:14 星期五
 */
class EurekaService {
    constructor() {
        // 是否开启eureka服务
        this.started = false;
    }
    /**
     * @name 启动eureka
     * @author liuguisheng
     * @version 2020-05-29 16:58:27 星期五
     */
    start() {
        return new Promise((res, rej) => {
            exports.CLIENT.start((err) => {
                if (err) {
                    console.log(`eureka注册失败${err.message}`);
                    rej(err);
                }
                this.started = true;
                console.log(`eureka注册成功`);
                res();
            });
        });
    }
    /**
     * @name 获取客户端状态信息
     * @author liuguisheng
     * @version 2020-05-29 17:05:30 星期五
     */
    getStatusInfo() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            if (ctx.path.startsWith('/info')) {
                return ctx.body = {
                    name: serviceName,
                    status: 'up'
                };
            }
            yield next();
        });
    }
    /**
     * @name 获取客户端健康信息
     * @author liuguisheng
     * @version 2020-05-29 17:16:20 星期五
     */
    getHealthInfo() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            if (ctx.path.startsWith('/health')) {
                return ctx.body = {
                    description: ' service for liuguisheng',
                    status: 'up'
                };
            }
            yield next();
        });
    }
    /**
     * @name 获取微服务
     * @author liuguisheng
     * @version 2020-05-29 17:19:04 星期五
     */
    getInstance(appId) {
        let instances = exports.CLIENT.getInstancesByAppId(appId);
        return instances.map((item) => {
            let { ipAddr, port } = item;
            return `http://${ipAddr}:${port['$']}`;
        });
    }
}
exports.EurekaService = EurekaService;

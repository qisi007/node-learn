import Eureka  from "eureka-js-client";
import { projectConfig } from "../config/config";
import { getIp4 } from "../util/utils";
import { Context } from "koa-swagger-decorator";

// 获取eureka配置信息
const {
    host,
    port,
    servicePath,
    username,
    password,
    serviceName
} = projectConfig.eureka;

// 获取ip4
const IP4 = getIp4();

// eureka集群地址
const EUREKA_URL =  `${host}:${port}/${servicePath}`;

let Eurekas: any = Eureka

// eurake客户端
export const CLIENT = new Eurekas({
    instance: {
        instanceId: `${IP4}:${port}`,
        app: serviceName,
        hostName: IP4,
        ipAddr: IP4,
        vipAddress: serviceName,
        port: { '$': port, '@enabled': true },
        statusPageUrl:  `http://${IP4}:${port}/info`,
        healthCheckUrl:  `http://${IP4}:${port}/health`,
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
    requestMiddleware: ( requestOpts: any, done: Function ) => {
        requestOpts.auth = {
            user: username,
            password
        };
        done(requestOpts);
    }
})

/**
 * @name eureka服务
 * @author liuguisheng
 * @version 2020-05-29 16:57:14 星期五
 */

export class EurekaService {
    // 是否开启eureka服务
    started: boolean = false;

    /**
     * @name 启动eureka
     * @author liuguisheng
     * @version 2020-05-29 16:58:27 星期五
     */
    start () {
        return new Promise((res, rej) => {
            CLIENT.start( (err: any) => {
                if ( err ) {
                    console.log(`eureka注册失败${err.message}`)
                    rej(err);
                }
                this.started = true;
                console.log(`eureka注册成功`);
                res();
            })

        })
    }

    /**
     * @name 获取客户端状态信息
     * @author liuguisheng
     * @version 2020-05-29 17:05:30 星期五
     */
    
    getStatusInfo () {
        return async ( ctx: Context, next: Function ) => {
            if ( ctx.path.startsWith('/info')) {
                return ctx.body = {
                    name: serviceName,
                    status: 'up'
                }
            }
            await next();
        }
    }
    /**
     * @name 获取客户端健康信息
     * @author liuguisheng
     * @version 2020-05-29 17:16:20 星期五
     */
    getHealthInfo () {
        return async ( ctx: Context, next: Function ) => {
            if ( ctx.path.startsWith('/health')) {
                return ctx.body = {
                    description: ' service for liuguisheng',
                    status: 'up'
                }
            }
            await next();
        }
    }
    /**
     * @name 获取微服务
     * @author liuguisheng
     * @version 2020-05-29 17:19:04 星期五
     */
    getInstance ( appId: string) {
        let instances = CLIENT.getInstancesByAppId(appId);
        return instances.map( (item: any) => {
            let { ipAddr, port } = item;
            return `http://${ipAddr}:${port['$']}`
        })
    }
}


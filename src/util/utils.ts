/**
 * @name 获取当前服务器ip4
 * @author liuguisheng
 * @version 2020-05-29 16:19:46 星期五
 */

 import os from "os";
 export const getIp4 = function () {
    let interfaces = os.networkInterfaces();
    for( let devName in interfaces ) {
        let iface: any = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }　　
    }
 }
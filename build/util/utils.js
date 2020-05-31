"use strict";
/**
 * @name 获取当前服务器ip4
 * @author liuguisheng
 * @version 2020-05-29 16:19:46 星期五
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIp4 = void 0;
const os_1 = __importDefault(require("os"));
exports.getIp4 = function () {
    let interfaces = os_1.default.networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};

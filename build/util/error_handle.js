"use strict";
class ErrorHandle extends Error {
    constructor(code, message) {
        super(message);
    }
}
ErrorHandle.list = new Map();
class Errors {
    getError() {
        return;
    }
}
Errors.errorList = new Map([
    [1000, "成功"],
    [4004, "未找到"],
    [5000, "服务器错误"],
]);
